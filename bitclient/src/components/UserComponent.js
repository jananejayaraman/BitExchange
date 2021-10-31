import React from 'react';
import UserService from '../services/UserService';
import logo from '../head.jpg';
class UserComponent extends React.Component {


constructor(props){
        super(props);
            this.state = {
                 btc_buy_recommend: "",
                 btc_sell_recommend: "",
                 eth_buy_recommend: "",
                 eth_sell_recommend: "",
                 sourceOne: "",
                 sourceTwo: "",
                 sourceOneBtcBuy: "",
                 sourceTwoBtcBuy: "",
                 sourceOneBtcSell: "",
                 sourceTwoBtcSell: "",
                 sourceOneEthBuy: "",
                 sourceTwoEthBuy: "",
                 sourceOneEthSell: "",
                 sourceTwoEthSell: "",
              }
              UserService.getUsers().then((response) => {
                      console.log(response.data);
                      var obj = response.data;
                      var sourceName = obj.recommendation.source;
                      this.setState({btc_buy_recommend: obj.recommendation.btc_buy_source});
                      this.setState({btc_sell_recommend: obj.recommendation.btc_sell_source});
                      this.setState({eth_buy_recommend: obj.recommendation.eth_buy_source});
                      this.setState({eth_sell_recommend: obj.recommendation.eth_sell_source});

                      this.setState({sourceOne: obj.bit_list[0].sourceName});
                                       this.setState({sourceTwo: obj.bit_list[1].sourceName});
                                       this.setState({sourceOneBtcBuy: obj.bit_list[0].btc_buy_price});
                                       this.setState({sourceTwoBtcBuy: obj.bit_list[1].btc_buy_price});
                                       this.setState({sourceOneBtcSell: obj.bit_list[0].btc_sell_price});
                                       this.setState({sourceTwoBtcSell: obj.bit_list[1].btc_sell_price});
                                       this.setState({sourceOneEthBuy: obj.bit_list[0].eth_buy_price});
                                       this.setState({sourceTwoEthBuy: obj.bit_list[1].eth_buy_price});
                                       this.setState({sourceOneEthSell: obj.bit_list[0].eth_sell_price});
                                       this.setState({sourceTwoEthSell: obj.bit_list[1].eth_sell_price});
              });
    }


    render (){
        return (
            <div>
               <div class="header">

               </div>
               <div class="navbar">
                  <a href="#">Home</a>
               </div>
               <div class="rowOne">
                  <div class="descOne">
                     <h2>Bitcoin</h2>
                     <div class="row">
                        <div class="col-sm-6">
                           <div class="card">
                              <div class="card-body">
                                 <h5 class="card-title">{this.state.sourceOne}</h5>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Buy Price

                                       </span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default" value={this.state.sourceOneBtcBuy}>
                                    </input>
                                 </div>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Sell Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default"  value={this.state.sourceOneBtcSell}/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="card">
                              <div class="card-body">
                                 <h5 class="card-title">{this.state.sourceTwo}</h5>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Buy Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default" value={this.state.sourceTwoBtcBuy}/>
                                 </div>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Sell Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default"  value={this.state.sourceTwoBtcSell}/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="descTwo">
                     <h2>Ethereum</h2>
                     <div class="row">
                        <div class="col-sm-6">
                           <div class="card">
                              <div class="card-body">
                                 <h5 class="card-title">{this.state.sourceOne}</h5>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Buy Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default" value={this.state.sourceOneEthBuy}/>
                                 </div>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Sell Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default"  value={this.state.sourceOneEthSell}/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="card">
                              <div class="card-body">
                                 <h5 class="card-title">{this.state.sourceTwo}</h5>

                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Buy Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default" value={this.state.sourceTwoEthBuy}/>
                                 </div>
                                 <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                       <span class="input-group-text" id="inputGroup-sizing-default">Sell Price</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" readonly aria-describedby="inputGroup-sizing-default"  value={this.state.sourceTwoEthSell}/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="rowTwo">
                  <div class="videoDesc">
                     <div class="card text-center">
                        <div class="card-header">
                           Recommendations
                        </div>
                        <div class="card-body">
                           <h5 class="card-title">Buy Bitcoins Today!!</h5>
                           <p class="card-text">Get ready for Worldwide payments in low processing fees.</p>
                           <a href="#" class="btn btn-primary">BTC Buy: {this.state.btc_buy_recommend}</a>&nbsp;
                           <a href="#" class="btn btn-primary">BTC Sell: {this.state.btc_sell_recommend}</a>&nbsp;
                           <a href="#" class="btn btn-primary">ETH Buy: {this.state.eth_buy_recommend}</a>&nbsp;
                           <a href="#" class="btn btn-primary">ETH Sell: {this.state.eth_sell_recommend}</a>&nbsp;
                        </div>
                     </div>
                  </div>
               </div>
               <div class="footer">
                  <p>Copyright &copy; Janane Jayaraman &nbsp; 2021 </p>
               </div>

            </div>

        )
    }
}

export default UserComponent
