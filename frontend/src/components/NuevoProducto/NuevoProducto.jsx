import React, { useEffect } from 'react'
import {Form, Formik} from "formik";
import {createProductRequest, getProductRequest} from './../../api/product.api';

function NuevoProducto() {

  return (
    <div>
        
          <Formik
            initialValues= {{
                userId: "",
                title: "",
                slug: "",
                summary: "",
                type: "",
                sku: "",
                price: "",
                discount: "",
                quantity: "",
                shop: ""


            }}
            onSubmit= {async (values) => {
                
                try {
                    console.log(values);
                    const response = await createProductRequest(values)
                } catch (error) {
                    console.error(error)
                }
                
            }}
          >
        {({handleChange, handleSubmit}) => (
           <div className="productoForm"> 
           <Form className="formInputs" onSubmit={handleSubmit}>
                <div className="mb-3">
                   <label className="form-label">Id del usuario</label>
                   <input type="number" name="userId" className="form-control" onChange={handleChange} />
               </div> 
               <div className="mb-3">
                   <label className="form-label">Nombre del producto</label>
                   <input type="text" name="title" className="form-control" onChange={handleChange} />
               </div>
               <div className="mb-3">
                   <label className="form-label">Slug</label>
                   <input type="text" name="slug" className="form-control" onChange={handleChange} />
               </div>
               <div className="mb-3">
                   <label className="form-label">Resumen</label>
                   <textarea type="text" name="summary" rows="3" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Tipo</label>
                   <input type="text" name="type" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Sku</label>
                   <input type="text" name="sku" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Precio</label>
                   <input type="text" name="price" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Descuento</label>
                   <input type="text" name="discount" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Unidades disponibles</label>
                   <input type="number" name="quantity" className="form-control" onChange={handleChange}  />
               </div>
               <div className="mb-3">
                   <label className="form-label">Disponible</label>
                   <input type="text" name="shop" className="form-control" onChange={handleChange}  />
               </div>

               <button type="submit" className="btn btn-primary">Cargar</button>

           </Form>
   </div> 
        )}
          
          </Formik>
    </div>
  )
}

export default NuevoProducto