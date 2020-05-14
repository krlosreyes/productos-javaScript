class producto{
    constructor(nombre, precio, year){
        this.nombre=nombre;
        this.precio=precio;
        this.year=year;
    }
}

class UI{
    addProducto(producto){
        const listaproductos = document.getElementById('lista-productos');
        const elemento = document.createElement('div');
        elemento.innerHTML=`
            <div class ="card text-center mb-4">
                <table>                          
                        <tr>
                            <td class="text-center"> ${producto.nombre} </td>
                            <td class="text-right"> ${producto.precio} </td>
                            <td class="text-center"> ${producto.year} </td>
                            <td class="float-right">
                                <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                            </td>
                        </tr>
                                          
                </table>
            </div>
        `;
        listaproductos.appendChild(elemento);
        
    }

    resetForm(){
        document.getElementById('formulario-producto').reset();
    }

    deleteProducto(element){
        if(element.name ==='delete'){
            console.log(element.parentElement.parentElement.parentElement.parentElement.parentElement.remove());
            this.showMessage('Producto borrado correctamente', 'danger');
        }

    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        //Mostrandolo en el DOM

        const container = document.querySelector('.container');
        const app =document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000)




    }
}

//DOM EVENTS

document.getElementById('formulario-producto')
        .addEventListener('submit', function(e){
            const nombre=document.getElementById('nombre').value;
            const precio=document.getElementById('precio').value;
            const year=document.getElementById('year').value;

            const Producto=new producto(nombre,precio,year);

            const ui = new UI();
            ui.addProducto(Producto);
            ui.resetForm();
            ui.showMessage('Producto agregado correctamente', 'success');

            e.preventDefault();
});

document.getElementById('lista-productos').addEventListener('click', function(e){
    const ui = new UI();    
    ui.deleteProducto(e.target);
    
    
});
