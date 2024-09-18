import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native'

const Beranda = ({navigation}) => {

    // const [data,setData] = useState([
    //     {
    //        icon :,
    //        judul:'Absensi Harian Pegawai'

    //     }
    // ])
    // const renderItem = ({item, index}) => {
    //     return (
    //       <TouchableOpacity activeOpacity={0.9} onPress={() => handlerNavigateToDetail(item) }>
    //       </TouchableOpacity>
    //     )
    // }  
    return (
       <View style={{backgroundColor:'white', flex: 1}}>
       
        <ScrollView>
            <View style={{backgroundColor: '#1c4fd8',
                  flexDirection: 'row',alignItems: 'center'
                  }}
            ><StatusBar 
            barStyle="light-content" 
            backgroundColor="#1e42a0" 
            translucent={false}
          />
               <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
           style={styles.Photo}/>
        
               <View
                    style= {{
                    flex: 1,
                    backgroundColor: '#1c4fd8', 
                    }}>
                     <Text style= {{fontSize: 12, color:'silver', fontWeight: 1, marginBottom: 4}}>Assalamualaikum,</Text>
                     <Text style= {{fontSize: 15, color:'white', fontWeight: 'bold'}}>Angga Saputra</Text>
                </View>
                <View  style= {{backgroundColor: '#1c4fd8',}}>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                    <Photo1/>
                    </TouchableOpacity>
                </View> 
        </View>
        <View style={{
                  backgroundColor: '#1c4fd8',
                  widht:20, height: 30,
                  marginBottom:24,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  
                  }}>

            
        <View style={{
                                    flexDirection: 'row',
                                     alignItems: 'center',
                                     marginTop: 3,
                                     marginLeft: 15,
                                     marginRight: 15,
                                     backgroundColor:'white', 
                                     borderRadius: 5,                                     
                                     shadowColor: 'black', // Warna bayangan
                                     shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                                     shadowOpacity: 1, // Opasitas bayangan
                                     shadowRadius: 0, //Radius bayangan
                                     elevation: 10, //Untuk Android   
                                    }}> 
                                   <View style={{
                                     backgroundColor:'white',
                                     borderTopLeftRadius: 5,
                                     borderBottomLeftRadius: 5,
                                     flex: 1, height: 55,
                                     flexDirection:'row',
                                     alignItems:'center',
                                     marginLeft:15                             
                                    }}>
                                        <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                         style={styles.LogoItem}/>
                                        <View style={{margin:10}}>
                                          <Text style={{fontSize:11, color:'black'}}>Dompet Digital</Text>
                                          <Text style={{fontSize:12,fontWeight:'bold', color:'black'}}>Rp.0</Text>
                                          <Text style={{fontSize:9, color:'blue'}}>Kode Unik:958</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                     backgroundColor:'#dcdde1', 
                                     width: 1,
                                     height: 40,
                                     
                                    }}>
                                    </View>
                                    <View style={{
                                     backgroundColor:'white',
                                     borderTopRightRadius: 5,
                                     borderBottomRightRadius: 5,
                                     flex: 1, height: 55,
                                     flexDirection:'row',
                                     alignItems:'center',
                                     marginLeft:15 
                                     
                                    }}>
                                        <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                         style={styles.LogoItem}/>
                                        <View style={{margin:10}}>
                                          <Text style={{fontSize:11, color:'black'}}>Dompet Digital</Text>
                                          <Text style={{fontSize:12,fontWeight:'bold', color:'black'}}>Rp.0</Text>
                                        </View>
                                    </View>
                               
                        </View>
                        </View>
        
            

               {/* bungkus view */}
                <View style={{backgroundColor:'white', marginTop:20}}>
                    
                     <View style={{
                             backgroundColor:'white',
                             borderTopLeftRadius: 10,
                             borderBottomLeftRadius: 10,
                             flex: 1,
                             
                             shadowColor: 'silver', // Warna bayangan
                             shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                             shadowOpacity: 0.3, // Opasitas bayangan
                             shadowRadius: 0, //Radius bayangan
                             elevation: 5, //Untuk Android
                             }}> 
                           
                           
                                
                        <View style={{ backgroundColor: '#ff6b00',
                            widht: 0,
                            height: 45,   
                            marginBottom:15,
                            marginLeft: 15,
                            marginRight: 15,
                            borderRadius:5,
                            shadowColor: 'black', // Warna bayangan
                            shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                            shadowOpacity: 1, // Opasitas bayangan
                            shadowRadius: 0, //Radius bayangan
                            elevation: 10, //Untuk Android
                        }}>
                            <View style={{ backgroundColor: 'white',
                            widht: 0,
                            height: 45,
                            marginLeft:6,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                            flexDirection:'row',
                            alignItems:'center',
                            
                        }}>
                           <View style={{margin:10, flexDirection:'row',
                            alignItems:'center',}}>
                                <Image source={{uri :'https://w7.pngwing.com/pngs/729/575/png-transparent-computer-icons-book-open-book-angle-reading-heart.png'}}
                                         style={styles.LogoItem}/>
                                <Text style={{fontSize:15,fontWeight:'600', color:'black',marginLeft:15}}>Maktabah</Text>
                                <Image source={{uri :'https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-flat-login-icon-with-arrow-access-on-white-vector-png-image_41472534.jpg'}}
                                          style={{ marginLeft: 200, width: 30, height: 30 }}/>
                            </View>
                        </View>
                        </View>
                        <View style={{ backgroundColor: 'white',
                            widht: 0,
                            height: 280,
                            shadowColor: 'black', // Warna bayangan
                            shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                            shadowOpacity: 1, // Opasitas bayangan
                            shadowRadius: 0, //Radius bayangan
                            elevation: 10, //Untuk Android
                        }}>
                            <Text style={styles.TextJudul}>Kepegawaian</Text>
                            <View style={styles.PemItem}>
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://cdn.icon-icons.com/icons2/2483/PNG/512/intelligent_report_icon_149923.png'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                            <View style={styles.PemItem}>
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'space-around',}}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white',
                            widht: 0,
                            height: 150,
                            marginTop:15,
                            shadowColor: 'black', // Warna bayangan
                            shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                            shadowOpacity: 1, // Opasitas bayangan
                            shadowRadius: 0, //Radius bayangan
                            elevation: 10, //Untuk Android
                        }}>
                            <Text style={styles.TextJudul}>Kepegawaian</Text>
                            <View style={styles.PemItem}>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View> 
                        </View>
                        <View style={{ backgroundColor: 'white',
                            widht: 0,
                            height: 280,
                            marginTop:15,
                            shadowColor: 'black', // Warna bayangan
                            shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                            shadowOpacity: 1, // Opasitas bayangan
                            shadowRadius: 0, //Radius bayangan
                            elevation: 10, //Untuk Android
                        }}>
                             <Text style={styles.TextJudul}>Kepegawaian</Text>
                            <View style={styles.PemItem}>
                            {/* item container 1 */}
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                            
                            <View style={styles.PemItem}>
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                            
                        </View>
                        <View style={{ backgroundColor: 'white',
                            widht: 0,
                            height: 280,
                            marginTop:15,
                            shadowColor: 'black', // Warna bayangan
                            shadowOffset: { width: 0, height: 5 }, // Offset bayangan
                            shadowOpacity: 1, // Opasitas bayangan
                            shadowRadius: 0, //Radius bayangan
                            elevation: 10, //Untuk Android
                        }}>
                             <Text style={styles.TextJudul}>Kepegawaian</Text>
                            <View style={styles.PemItem}>
                              <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                              <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>
                               
                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                            {/* container 4 */}
                            <View style={styles.PemItem}>
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                                  <View style={styles.Item}>
                                     <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-1/455053601_1517082399182247_3532168808836257037_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=DentAXbvAF8Q7kNvgGVL43K&_nc_ht=scontent.fjog3-1.fna&_nc_gid=AEtGCvoNfxIU168eHena44r&oh=00_AYCftgcJUZWBl9X0AqSeHBX7E-2xP_to3Wk7406i06M7jg&oe=66EAD09F'}}
                                    style={styles.LogoItem}/>
                                  </View>
                               </TouchableOpacity>

                            </View>
                            <View style={styles.PemItem}>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>
                                <Text style={styles.TextItem}>Absensi{'\n'}Harian{'\n'}Pegawai</Text>  
                            </View>
                            
                        </View>
                    </View>
                </View>
                {/* bungkus view */}    
                </ScrollView> 
        </View>
        
        
    )
}

const Photo = () => {
    return (
        <View style={{    
            }}
            >
           <Image source={{uri :'https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/455053601_1517082399182247_3532168808836257037_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzNyXDE62Wtu2EnLpkjoouzq1krPERdLjOrWSs8RF0uAX3gYiMLpRDJrgciJ4G3xkBoYcz7_eKLSo_3UGogqX7&_nc_ohc=gdylG2OIvqQQ7kNvgEMJy1y&_nc_ht=scontent.fjog3-1.fna&oh=00_AYCeaR_Ml2ypG5wc_y7YFh70v3nOztwxBjk3dDGT82cU7Q&oe=66DD221D'}}
           style={styles.Photo}
           />
        </View>
        
    )      
    }
    
    const Photo1 = () => {
        return (
            <Image source={require('../../asset/icon.jpg')}
           style={styles.Photo1}
           />
        )
    }

    const styles = StyleSheet.create({
       Photo : {
        width : 50,
        height: 50,
        margin: 15,
        borderRadius:50,   
       },     
        Photo1 : {
         width : 40,
         height: 40,
         margin: 15,
         borderRadius:50,
        },
        TextJudul:{
         fontSize: 17, 
         fontWeight: '500',
         color: 'black', margin: 10, 
         letterSpacing: 0.5
        },
        PemItem:{
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'space-around'
        },  
        TextItem:{
            fontSize: 13,
            color: 'black', 
            margin: 10, textAlign: 'center'
        },
        Item:{
             backgroundColor: '#1c4fd8', 
             width: 50, 
             height:50, 
             borderRadius: 5,
             justifyContent:'center',
             alignItems:'center'
        },
        LogoItem:{
            width:30,
            height:30,
        }
    }) 

    export default Beranda