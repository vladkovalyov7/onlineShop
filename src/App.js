import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"



class App extends React.Component {
  constructor(props) {
      super(props)
      this.state={
          orders:[],
          currentItems:[],
          items: [
              {
                  id: 1,
                  title:'Chair in gray',
                  img: 'chair-grey.jpg',
                  desc: 'Armchair is a piece of furniture for comfortable long sitting',
                  category: 'chairs',
                  price: '53.50'
              },
              {
                  id: 2,
                  title:'Kitchen table',
                  img: 'table.png',
                  desc: 'Kitchen table is a table designed for eating together',
                  category: 'tables',
                  price: '117.20'
              },
              {
                  id: 3,
                  title:'Armchair in gray',
                  img: 'armchair-grey.jpg',
                  desc: 'Armchair is a piece of furniture for comfortable long sitting',
                  category: 'chairs',
                  price: '85.70'
              },
              {
                  id: 4,
                  title:'Sofa in gray',
                  img: 'sofa-grey.jpg',
                  desc: 'Sofa is a piece of furniture designed for seating one and/or more people',
                  category: 'sofa',
                  price: '239.25'
              },
              {
                  id: 5,
                  title:'Sofa in black',
                  img: 'sofa-black.jpg',
                  desc: 'Sofa is a piece of furniture designed for seating one and/or more people',
                  category: 'sofa',
                  price: '375.30'
              },
              {
                  id: 6,
                  title:'Sofa in brown',
                  img: 'sofa-brown.jpg',
                  desc: 'Sofa is a piece of furniture designed for seating one and/or more people',
                  category: 'sofa',
                  price: '199.99'
              }
          ],
          showFullItem: false,
          fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
  }
    render() {
      return (
          <div className="wrapper">
              <Header orders={this.state.orders} onDelete={this.deleteOrder} />
              <Categories chooseCategory={this.chooseCategory}/>
              <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

              {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item ={this.state.fullItem}/>}
              <Footer/>
          </div>
      );
  }

  onShowItem(item){
      this.setState({fullItem: item })
      this.setState({showFullItem: !this.state.showFullItem})
}

  chooseCategory(category){
      if(category === 'all'){
          this.setState({ currentItems: this.state.items})
          return
      }

      this.setState({
          currentItems: this.state.items.filter(el => el.category === category)
      })
  }

  deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item){
      let isInArray = false
      this.state.orders.forEach(el =>{
          if (el.id === item.id)
              isInArray = true
      })
      if (!isInArray)
          this.setState({orders: [...this.state.orders,item] })
  }
}

export default App;
