import React, { useEffect,useState } from 'react';
import './Home.css';
import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card/Card';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

const Home = ({setName, name, getAllUsers, setSelectedProduct}) => {
  const history = useHistory();
  useEffect(() => {
    if(getAllUsers){
      getAllUsers();
    }
  }, []);

  const [count, setcount] = useState([
    {
      id: 1,
      productName: 'Purse',
      price: '299',
      currency: '$',
      imgUrl: 'https://5.imimg.com/data5/CO/XW/MY-44197581/ladies-stylish-purse-500x500.jpg'
    },
    {
      id: 2,
      productName: 'NZZXPURSE',
      price: '499',
      currency: '$',
      imgUrl: 'https://5.imimg.com/data5/YY/VM/DS/SELLER-37440292/leather-ladies-purse-500x500.jpg'
    },
    {
      id: 3,
      productName: 'qwePursze',
      price: '129',
      currency: '$',
      imgUrl: 'https://media.istockphoto.com/photos/yellow-handbag-picture-id1154597724?k=20&m=1154597724&s=612x612&w=0&h=TDkUQF3IGOcHsCVfjqwd27nvFzm4jkBYP0oGvxvgSt0='
    },
    {
      id: 4,
      productName: 'qwePursze',
      price: '129',
      currency: '$',
      imgUrl: 'https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png'
    },
    {
      id: 5,
      productName: 'qwePursze',
      price: '129',
      currency: '$',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIAoLbYllKE3RIACUfGusdjQN6Tokeb83Vw&usqp=CAU'
    },
    {
      id: 6,
      productName: 'qwePursze',
      price: '129',
      currency: '$',
      imgUrl: 'https://i.pinimg.com/564x/8a/ee/dd/8aeeddc0b2085e47c7d62e7bf2af8366.jpg'
    }
  ])

  const handleClick = (productInfo) => {
    if (setSelectedProduct) {
      setSelectedProduct(productInfo);
      history.push(`/productDetails/${productInfo.id}`);
    }
  }
  return (
    <div>
      <PageTitle title="Shoppo Home"/>
      <hr></hr>
      {/* product card list */}
      <div className="product-list">
        <Grid container spacing={6} >
          {count.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                productInfo={item}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>

  )
}

export default Home
