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

function cerrarSesion() {
    Swal.fire({
        title: "¿Cerrar sesión?",
        text: "Se cerrará tu sesión actual",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#1D428A',
        cancelButtonColor: '#CD5151 ',
        confirmButtonText: "Sí, cerrar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {

            localStorage.removeItem("usuario");
            localStorage.clear();
            window.location.href = "index.html";
        }
    });
}