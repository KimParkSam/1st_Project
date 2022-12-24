window.addEventListener('DOMContentLoaded', event => {
    $('#upload_file').on('click', function(){
        $('#userfile').trigger('click');

        $('#userfile').change(function(){
            var form = document.getElementById('profile_info');
            var formData = new FormData(form);

            axios({
            method : 'post',
            url : '/upload_file',
            data :  formData,
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
        //무조건 data로 받는다.
        .then((a) => { return a.data ; })
        //이미지경로 + path(req.file.filename)
        .then((reuslt) => {
            console.log(reuslt);
            document.getElementById('profile_img').src = "static/profile_img/" + reuslt.path;
        });
      });        
     });

     const like_modal = new bootstrap.Modal('#like_modal');
     $('#love_img').click(function(){
        $('#like_modal').removeClass("d-none");
        like_modal.show();
     });

});


