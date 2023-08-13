<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadFile">Dosyayı Yükle</button>
  </div>
</template>

<script>
import axios from 'axios';
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

    axios.post('https://localhost:7002/FileUpload', formData)
      .then(response => {
        // Dosya yükleme başarılı
        alert(response);
      })
      .catch(error => {
        // Dosya yükleme sırasında bir hata oluştu
        alert(error);
      });
    },
  },
};
</script>

