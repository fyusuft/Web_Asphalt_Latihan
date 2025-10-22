const form = document.getElementById("subscription-form");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;
        const terms = document.getElementById("terms").checked;

        document.querySelectorAll(".error-message").forEach((element) => {
          element.textContent = "";
        });

        let isValid = true;

        if (!fullname) {
          document.getElementById("fullname-error").textContent = "Nama Lengkap harus diisi.";
          isValid = false;
        }

        if (!email) {
          document.getElementById("email-error").textContent = "Email harus diisi.";
          isValid = false;
        }

        if (!birthdate) {
          document.getElementById("birthdate-error").textContent = "Tanggal lahir harus diisi.";
          isValid = false;
        }

        if (!gender) {
          document.getElementById("gender-error").textContent = "Jenis Kelamin harus dipilih.";
          isValid = false;
        }

        if (!terms) {
          document.getElementById("terms-error").textContent = "Anda harus menyetujui Syarat dan Ketentuan.";
          isValid = false;
        }

        if (isValid) {
          document.getElementById("success-message").textContent = "Data berhasil ditambahkan.";
          form.reset();
        }
      });