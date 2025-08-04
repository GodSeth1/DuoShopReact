// import { useFav } from '../../context/FavContext';
// import Modal from 'react-bootstrap/Modal';
// import Button from "react-bootstrap/esm/Button";
// import "./favorite.css"

// export default function FavModal(props) {

//     const {fav, dispatch} = useFav()

//     const totalAmount = fav.reduce((sum, p) => sum + p.price, 0)
    
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Favorite
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Products: {fav.length}</h4>
//         <p>
//           {fav.map(p => (
//                 <div className="product-fav">
//                     <img src={p.images[0]} alt="" />
//                     <div>
//                         <p>{p.name}</p>
//                         <p>{p.price}</p>
//                     </div>
//                     <div className="fav-quantity"> 
//                       <Button>-</Button>
//                       {p.quantity}
//                       <Button onClick={() => dispatch({ type: "INCREASEFV", id: p.id})}></Button>
//                     </div>
//                     <Button style={{marginLeft: "auto", backgroundColor: "red", height: "40px"}} onClick={() => dispatch({ type: "REMOVEFV", id: p.id})}>Remove</Button>
//                 </div>
//             ))}
//         </p>
//       </Modal.Body>
//       <Modal.Footer style={{display: "flex", justifyContent: "space-between"}}>
//         <h3>Total amount: {totalAmount}</h3>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }