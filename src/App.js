import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items:[
        {
        id: 1,
        title:'Armchair',
        img:'grey-chair.jpeg',
        desc:'An armchair is a comfortable and typically upholstered chair with armrests, designed for relaxation and adding a touch of sophistication to your space.',
        category:'chairs',
        price:'149.99'
        },
        {
          id: 2,
          title:'Chair',
          img:'grey.jpeg',
          desc:'A chair is a functional piece of furniture designed for seating, providing comfort and style to enhance your living space.',
          category:'chairs',
          price:'49.99'
          },
          {
            id: 3,
            title:'Light',
            img:'light.jpeg',
            desc:'A light is a source of illumination, providing brightness or visibility, often powered by electricity and used for practical or decorative purposes in various settings.',
            category:'light',
            price:'179.99'
            },
            {
              id: 4,
              title:'Sofa',
              img:'1sofa.jpeg',
              desc:'A sofa is a piece of furniture designed for seating multiple people, typically with a backrest and arms, providing comfort and style for lounging or socializing in living spaces.',
              category:'sofa',
              price:'199.99'
              },
              {
                id: 5,
                title:'Table',
                img:'table.jpeg',
                desc:'A table is a piece of furniture with a flat surface, supported by legs or other structures, designed for various activities such as dining, working, or displaying items in a functional and decorative manner.',
                category:'table',
                price:'79.99'
                },
                {
                  id: 6,
                  title:'Sofa',
                  img:'2sofa.jpeg',
                  desc:'A sofa is a piece of furniture designed for seating multiple people, typically with a backrest and arms, providing comfort and style for lounging or socializing in living spaces.',
                  category:'sofa',
                  price:'159.99'
                  }
                
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems=this.state.items
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)


  }
    render(){
    return (
      <div className="wrapper">
        <Header  orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

        <Footer />
      </div>
    )
    }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
    }
    chooseCategory(category){
      if(category === 'all'){
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el=> el.category ===category)
      })
    }


    deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})

    }

    addToOrder(item){
      let isInArray = false
      this.state.orders.forEach(el=> {
        if(el.id === item.id)
          isInArray = true
      })
      if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })

    }
}

export default App;
