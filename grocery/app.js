let alert = document.querySelector('.alert');
        let form = document.querySelector('.grocery-form');
        let grocery = document.querySelector('#grocery');
        let submitBtn = document.querySelector('.submit-btn');
        let container = document.querySelector('.grocery-container');
        let list = document.querySelector('.grocery-list');
        let clearBtn = document.querySelector('.clear-btn');

        let editElement;
        let editFlag = false;
        let editID = "";

        form.addEventListener("submit", addItem);
        clearBtn.addEventListener('click', clearItems);

        function addItem(e) {
            e.preventDefault();
            let value = grocery.value;
            let id = new Date().getTime().toString();
            if (value && !editFlag) {
                const element = document.createElement('article');
                element.classList.add('grocery-item');
                const attr = document.createAttribute('data-id');
                attr.value = id;
                element.setAttributeNode(attr);
                element.innerHTML = `
                    <p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`;
                list.appendChild(element);
                displayAlert("Item added to the list", "success");
                container.classList.add('show-container');
                addToLocalStorage(id, value);
                setBackToDefault();
            } else if (value && editFlag) {
                console.log("Editing");
            } else {
                displayAlert("Please enter value", "danger");
            }
        }
        function displayAlert(text, action) {
            alert.textContent = text;
            alert.classList.add(alert- {action});
            alert.style.display = 'block';
            setTimeout(function() {
                alert.textContent = "";
                alert.classList.remove(alert- {action});
                alert.style.display = 'none';
            }, 1000);
        }

        function clearItems() {
            let items = document.querySelectorAll('.grocery-item');
            if (items.length > 0) {
                items.forEach(function(item) {
                    list.removeChild(item);
                });
            }
            container.classList.remove("show-container");
            displayAlert('Empty list', "danger");
            setBackToDefault();
            localStorage.removeItem('list');
        }

        function setBackToDefault() {
            grocery.value = " ";
            editFlag = false;
            editID = ' ';
            submitBtn.textContent = "Submit";
        }

        function addToLocalStorage(id, value) {
            console.log('Added to local storage');
        }
