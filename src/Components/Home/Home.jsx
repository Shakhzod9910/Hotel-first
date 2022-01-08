function Home() {
  return (
    <>
      <section className="home">
        <div className="navbar">
          <span>Hotel admistration</span>
        </div>
        <div className="container">
          <div className="homeContent">
            <div className="navbox">
              <ul className="TipList">
                <li className="tipListitems">Simple</li>
                <li className="tipListitems">Middle</li>
                <li className="tipListitems">Luxuary</li>
              </ul>
            </div>
            <div className="rooms">
              <ul className="_room">
                <li>
                  <div className="items item_1">
                    <i class="fas fa-hotel"></i>
                    <div className="right">
                      <p>12</p>
                      <span>Empty Rooms</span>
                    </div>
                  </div>
                  <span className="link_1">View Details</span>
                </li>
                <li>
                  <div className="items item_2">
                    <i class="far fa-thumbs-up"></i>
                    <div className="right">
                      <p>25</p>
                      <span>Confirmed Bookings</span>
                    </div>
                  </div>
                  <span className="link_2">View Details</span>
                </li>
                <li>
                  <div className="items item_3">
                    <i class="far fa-clock"></i>
                    <div className="right">
                      <p>53</p>
                      <span>Busy Rooms</span>
                    </div>
                  </div>
                  <span className="link_3">View Details</span>
                </li>
              </ul>
              <div className="roomLists">
                <span className="listHeader">Bookings</span>
                <hr />
                <ul className="room_list_order">
                  <li>Code</li>
                  <li>Room</li>
                  <li>Ckeck in</li>
                  <li>Check out</li>
                  <li>Total</li>
                  <li>First Name</li>
                  <li>Last Name</li>
                  <li>Room Phone</li>
                  <li>Take</li>
                </ul>
                <ul >
                  <li>
                    <ul className="room_order">
                      <li>212</li>
                      <li>Middel</li>
                      <li>20.12.2021</li>
                      <li>20.12.2021</li>
                      <li>$300</li>
                      <li>Eshmat</li>
                      <li>Toshmatov</li>
                      <li>+98989999911</li>
                      <li>
                        <button className="teke_btn">Take</button>
                      </li>
                      
                    </ul>
                  </li>
                  <li>
                    <ul className="room_order">
                      <li>212</li>
                      <li>Middel</li>
                      <li>20.12.2021</li>
                      <li>20.12.2021</li>
                      <li>$300</li>
                      <li>Eshmat</li>
                      <li>Toshmatov</li>
                      <li>+98989999911</li>
                      <li>
                        <button className="teke_btn">Take</button>
                      </li>
                      
                    </ul>
                  </li>
                  <li>
                    <ul className="room_order">
                      <li>212</li>
                      <li>Middel</li>
                      <li>20.12.2021</li>
                      <li>20.12.2021</li>
                      <li>$300</li>
                      <li>Eshmat</li>
                      <li>Toshmatov</li>
                      <li>+98989999911</li>
                      <li>
                        <button className="teke_btn">Take</button>
                      </li>
                      
                    </ul>
                  </li>
                  <li>
                    <ul className="room_order">
                      <li>212</li>
                      <li>Middel</li>
                      <li>20.12.2021</li>
                      <li>20.12.2021</li>
                      <li>$300</li>
                      <li>Eshmat</li>
                      <li>Toshmatov</li>
                      <li>+98989999911</li>
                      <li>
                        <button className="teke_btn">Take</button>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
