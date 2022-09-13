import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import { finishGame} from "../redux/moneySlice"
import { useSelector, useDispatch } from 'react-redux'


function FinishGame(args) {
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.money.cart)
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch()

  return (
    <div>
      <Button color="danger" onClick={cart==0? () => alert("your cart is empty") : toggle}>
        Show Cart
      </Button>        
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Cart</ModalHeader>
        <ModalBody>
            {
                cart.map((cartItem,index) => 
                    <h3 key={index}>{cartItem}</h3>
                )  
            }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {dispatch(finishGame()); setModal(!modal)}}>
            Finish Game
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FinishGame