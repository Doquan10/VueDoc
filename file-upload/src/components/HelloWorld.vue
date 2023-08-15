<template>
  <div>
    <input type="file" @change="handleFileUpload"  />
    <button @click="uploadFile">Dosyayı Yükle</button>
    <button @click="convertZip">Zip Dosyasına Çevir</button>
  
  </div>
</template>

<script>
import axios from 'axios';
import JSZip from 'jszip';

export default {

  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      // Dosya yükleme işlemini gerçekleştirme
      const formData = new FormData();
      formData.append('file', this.selectedFile);

          axios.post('https://localhost:7239/api/Upload/UploadFile', formData, {
            headers: {

              'Content-Type': 'multipart/form-data'
              // If you receieve JSON response.
            }
          })
            .then(response => {
              // Dosya yükleme başarılı
              alert(response);
            })
            .catch(error => {
              // Dosya yükleme sırasında bir hata oluştu
              alert(error);
            });
     

    },
    convertZip() {
      /*
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      var zip = new JSZip();
      zip.file( formData);
      zip.generateAsync({ type: 'blob' }).then(content => {
        // Oluşturulan zip dosyasını indirme işlemi
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'myZipFile.zip';
        link.click();
        URL.revokeObjectURL(link.href);
      });
      */
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      const file = new Blob([formData], { type: 'application/pdf' });
      const zip = new JSZip();
      zip.file('userFile.pdf', file);
      zip.generateAsync({ type: 'blob' }).then(content => {
      const zipFile = new Blob([content]);
      const url = URL.createObjectURL(zipFile);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'userFiles.zip';
      link.click();
});

    



    },
    
  },
};
</script>

