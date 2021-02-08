import React, {Component} from 'react'
import {StyleSheet, View, Text, Image,Modal,TouchableOpacity} from 'react-native'
import {FlatList, ScrollView, } from 'react-native-gesture-handler'
import resp from 'rn-responsive-font';

export default class RequestScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
        index : 0,
       modelVisible :false,
 }
     this.ImageList= [
         { image: require('./Assets/images1.jpg')},
         { image: require('./Assets/images2.jpg')},
         { image: require('./Assets/images3.jpg')},
         { image: require('./Assets/images4.jpg')},
         { image: require('./Assets/images5.jpg')},
         { image: require('./Assets/images6.jpg')},
         { image: require('./Assets/images7.jpg')},
         { image: require('./Assets/images8.jpg')},
         { image: require('./Assets/images9.jpg')},
         { image: require('./Assets/images10.jpg')},
        
      ];
     
    
  }
  OpenModalBox () {
    
    this.setState({modelVisible: !this.state.modelVisible})
  }
  closeModal () {
     console.log('close the model')
     this.setState({modelVisible: false})
     return false
  }
  nextImage(){
    let i = this.state.index;
       console.log(this.state.index)
        if (i == this.ImageList.length - 1) {
            i = 0; 
        } else {
            i = i + 1; 
        }
        this.setState({index: i});
    }
 previewImage(){
    let i = this.state.index;
    if (i == 0) {
        i = this.ImageList.length - 1; 
    } else {
        i = i - 1;
    }
    this.setState({index: i});
}

 
  render () {
    const currentImage = this.ImageList[this.state.index].image;
  
   
    return (
      <View style={styles.MainContainer}>
      <Modal  animationType='slide'
              transparent={true}
              visible={this.state.modelVisible }
              onRequestClose={() => {this.closeModal()}}>
          <View style={styles.centeredView}>
                <View style={styles.deletemodalView}>
                <TouchableOpacity
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => {
                        this.setState({modelVisible: false})
                    }}>
                    <Image
                      source={require('./Assets/cancel.png')}
                      style={styles.CloseButtonStyle}
                    />
                  </TouchableOpacity>

                <View>
                    <Image style={styles.ModalImage} source={currentImage}></Image>
                </View>
                 
                 

                 
                </View>
              </View>
      </Modal>
      <View style={styles.OngoingContainer}>
                 <TouchableOpacity onPress={() => {this.OpenModalBox()}}>
                 <Image source={currentImage} style={styles.OngoingImages} />
                 </TouchableOpacity>   
               
                <View style={styles.LeftIcon_style}>
                <TouchableOpacity onPress={(e) =>this.previewImage(e)} >
                
                <Image source={require('./Assets/left-arrow.png')} style={{height:30}} />
                   </TouchableOpacity>
                </View>
               
               
                <View  style={styles.rightIcon_style} >
                <TouchableOpacity onPress={(e) => this.nextImage(e)} >
                <Image source={require('./Assets/right-arrow.png')} style={{height:30}} />
                   </TouchableOpacity> 
                </View>
              </View>

            <View>
                <ScrollView horizontal={true}>
                  {this.ImageList.map((item, key)=>(
                    
                      <View key={key} style={styles.PastContainer}>
                        <View style={[styles.SelectImage, { borderColor:currentImage?'blue':this.ImageList?'black':'red'}]}>
                          <Image source={item.image} style={styles.ImageContiner}></Image>
                          </View>
                      </View>
                  ))}
                </ScrollView>
            </View>
          </View>
    )
  }
}


const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
    
    },
    OngoingText:{
        fontSize:18,
        marginLeft:10,
        marginTop:10,
        color:'#000',
        fontWeight:'bold'
    },
    OngoingImages:{
        width:'95%',
        backgroundColor:'blue',
        height:250,
        
    },
    rightIcon_style:{
        height:40,
        left:50,
       
        position:'absolute',
        top:100,
       left:370
    },
    LeftIcon_style:{
        height:50,
        left:50,
      
        position:'absolute',
        top:100,
        left:0,
    },
    PastText:{
        marginTop:10,
        fontSize:18,
        marginLeft:10,
        color:'#000',
        fontWeight:'bold'
    },
    
    OngoingContainer:{
        flex:1,
        margin:10,
        width:'100%',
        height:300,
        
    },
    PastContainer:{
        margin:10,
        flex:0.5,
        
        backgroundColor:'yellow'
       
    },
    SelectImage:{
        borderWidth:2,
        borderColor:'red'
    },
     ImageContiner:{
       backgroundColor:'blue',
        height:80,
        width:80,
       
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf:'center',
       
      },
      deletemodalView: {
        margin: 10,
        width: 380,
        flex:0.7,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        marginTop:-20,
       alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    
      
      CloseButtonStyle: {
          
          marginTop:5,
        height:30,
        width:30,
        alignSelf: 'flex-end',
      },
      ModalImage:{
          width:'100%',
          marginTop:2,
          height:500,
          
      }
  }); 
