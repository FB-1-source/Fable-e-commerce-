import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import data from "../data";
import { Contextcart } from "../App";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "70%",
    height: "65%",
    backgroundColor: "#f5f5f5;",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function NewModal({ children, id }) {
  const [cartItems, setcartItems] = useContext(Contextcart);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { products } = data;
  const new3 = products.filter((item) => {
    return item.id === id;
  });
  const Addtocart = (item) => {
    setcartItems([...cartItems, { ...item }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="box" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {new3.map((item) => (
              <div className="allmod">
                <div className="modalgp">
                  <div className="modalcomb">
                    <img
                      className="modalimg modalmain"
                      src={item.image}
                      alt={item.name}
                    ></img>
                    <img
                      className="modalimg"
                      src={item.image1}
                      alt={item.name}
                    ></img>
                    <img
                      className="modalimg"
                      src={item.image2}
                      alt={item.name}
                    ></img>
                    <img
                      className="modalimg"
                      src={item.image3}
                      alt={item.name}
                    ></img>
                  </div>
                </div>
                <div className="modoub">
                  <h1>{item.name}</h1>
                  <h6 className="desc">{item.desc}</h6>
                  <h2>{"$" + item.price}</h2>
                  <button
                    onClick={() => {
                      Addtocart(item);
                      setOpen(false);
                    }}
                    type="button"
                    class="btn btn-dark fbtn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
