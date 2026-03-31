const slimInstance = mdb.Sidenav.getInstance(document.getElementById('sidenav-1'));

slimInstance.show();

document.getElementById('slim-toggler').addEventListener('click', () => {
  slimInstance.toggleSlim();
})
document.addEventListener('shown.bs.collapse', function (e) {
    const codeBlock = e.target.querySelector("code");
    if (codeBlock) {
        Prism.highlightElement(codeBlock);
    }
});

(() => {
'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || navigator.language || 'es';
    const isES = lang.startsWith('es');

    const getPlaceholderForLang = () => isES ? 'Buscar...' : 'Search...';
    const getSelectAllText = () => isES ? 'Seleccionar todo' : 'Select all';

    const applyFilterPlaceholder = () => {
        document.querySelectorAll('.select-filter-input').forEach(inp => {
            if (!inp.dataset.placeholderSet) {
                inp.setAttribute('placeholder', getPlaceholderForLang());
                inp.dataset.placeholderSet = '1';
            }
        });
    };

    const applySelectAllText = () => {
        document.querySelectorAll('.select-all-option .select-option-text').forEach(span => {
            if (!span.dataset.textChanged) {
                const checkbox = span.querySelector('input[type="checkbox"]');
                span.textContent = getSelectAllText();
                if (checkbox) span.prepend(checkbox);
                span.dataset.textChanged = '1';
            }
        });
    };

    applyFilterPlaceholder();
    applySelectAllText();

    const mo = new MutationObserver(mutations => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.nodeType !== 1) continue;

                // Filtros
                if (node.matches && node.matches('.select-filter-input')) {
                    applyFilterPlaceholder();
                } else if (node.querySelectorAll) {
                    applyFilterPlaceholder();
                }

                // Select all
                if (node.matches && node.matches('.select-all-option .select-option-text')) {
                    applySelectAllText();
                } else if (node.querySelectorAll) {
                    applySelectAllText();
                }
            }
        }
    });

    mo.observe(document.body, { childList: true, subtree: true });
});

const passwordInput1 = document.getElementById('show-password-input-1');
const toggleIcon = document.getElementById('show-password-toggle-icon');

toggleIcon.addEventListener('pointerdown', (e) => {
  e.preventDefault();

    if (passwordInput1.type === 'password') {
      passwordInput1.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput1.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
});

const stepper = document.querySelector('.stepper')

const stepperInstance = mdb.Stepper.getOrCreateInstance(stepper);
const touchSwipeLeftRight = new mdb.Touch(stepper, 'swipe', {
  threshold: 100
});

stepper.addEventListener('swipeleft', () => {
  stepperInstance.nextStep();
});
stepper.addEventListener('swiperight', () => {
  stepperInstance.prevStep();
});
document.querySelectorAll('.copy-link').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const link = this.getAttribute('data-link');

            navigator.clipboard.writeText(link).then(() => {
                Swal.fire({
                    icon: 'success',
                    text: 'El enlace del logo ha sido copiado al portapapeles.',
                    confirmButtonColor: '#1d428a',
                    confirmButtonText: 'Aceptar'
                });
            }).catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo copiar el link.',
                    confirmButtonColor: '#d33'
                });
            });
        });
  });
 document.querySelectorAll('.Prueba-popup').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
                Swal.fire({
                    icon: 'success',
                    text: 'Texto del popup.',
                    confirmButtonColor: '#1d428a',
                    confirmButtonText: 'Aceptar',
                    showCancelButton: true,
                    cancelButtonText: 'Cancelar',
            });
        });
    });

  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("filePreview");

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    fileInput.files = e.dataTransfer.files;
    showFile();
  });

  fileInput.addEventListener("change", showFile);

  function showFile() {
    const file = fileInput.files[0];
    if (!file) return;

    preview.innerHTML = `
      <div class="alert alert-info d-flex justify-content-between align-items-center rounded-3">
        <div>
          <i class="fas fa-file-alt me-2"></i>
          ${file.name}
          <span class="badge bg-primary ms-2">
            ${(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
        <button type="button"
                class="btn btn-sm btn-danger btn-floating"
                onclick="removeFile()">
          <i class="fas fa-trash fa-white"></i>
        </button>
      </div>
    `;
  }

  function removeFile() {
    fileInput.value = "";
    preview.innerHTML = "";
  }