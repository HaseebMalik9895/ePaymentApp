import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';

const Manu = [
  {
    id: 0,
    name: 'Electricity',
    image: require('../../../assets/images/Electricity.png'),
  },
  {
    id: 1,
    name: 'Water Bill',
    image: require('../../../assets/images/waterbill.png'),
  },
  {
    id: 2,
    name: 'Phone Cradit',
    image: require('../../../assets/images/Mobile.png'),
  },
  {
    id: 3,
    name: 'Internet',
    image: require('../../../assets/images/Internet.png'),
  },
  {
    id: 4,
    name: 'E-Money',
    image: require('../../../assets/images/Cradit.png'),
  },
  {
    id: 5,
    name: 'G-Voucher',
    image: require('../../../assets/images/Voucher.png'),
  },
  {
    id: 6,
    name: 'Netflix',
    image: require('../../../assets/images/Netflix.png'),
  },
  {
    id: 7,
    name: 'More',
    image: require('../../../assets/images/More.png'),
  },
];

const promo = [
  {
    id: 0,
    name: 'Electricity',
    image: require('../../../assets/images/Salepromo.png'),
  },
  {
    id: 1,
    name: 'Water Bill',
    image: require('../../../assets/images/Salepromo.png'),
  },
  {
    id: 2,
    name: 'Phone Cradit',
    image: require('../../../assets/images/Salepromo.png'),
  },
  {
    id: 3,
    name: 'Internet',
    image: require('../../../assets/images/Salepromo.png'),
  },
  {
    id: 4,
    name: 'E-Money',
    image: require('../../../assets/images/Salepromo.png'),
  },
  {
    id: 5,
    name: 'G-Voucher',
    image: require('../../../assets/images/Salepromo.png'),
  },
];

const Food = [
  {
    id: 0,
    name: 'KFC',
    image: require('../../../assets/images/KFC.png'),
  },
  {
    id: 1,
    name: 'Burger King',
    image: require('../../../assets/images/Burgerking.png'),
  },
  {
    id: 2,
    name: 'Pizza Hut',
    image: require('../../../assets/images/Pizzahut.png'),
  },
  {
    id: 3,
    name: 'KFC',
    image: require('../../../assets/images/KFC.png'),
  },
  {
    id: 4,
    name: 'Burger King',
    image: require('../../../assets/images/Burgerking.png'),
  },
  {
    id: 5,
    name: 'Pizza Hut',
    image: require('../../../assets/images/Pizzahut.png'),
  },
];

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            height: 180,
            width: '100%',
            backgroundColor: '#F54D4D',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
              fontFamily: 'Roboto-Medium',
            }}>
            Haseeb Bin Umar
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 32,
              width: 99,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 40,
            }}>
            <Text
              style={{
                color: '#F54D4D',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'Roboto-Medium',
              }}>
              Get Reward
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              borderRadius: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/bellicon.png')}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 93,
            width: '100%',
            alignItems: 'center',
            marginTop: -50,
          }}>
          <View
            style={{
              width: 345,
              height: 93,
              backgroundColor: 'white',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              elevation: 4,
            }}>
            <View
              style={{
                width: 150,
                height: 69,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '450',
                }}>
                Balance
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                RS: 385.000
              </Text>
            </View>
            <View
              style={{
                width: 150,
                height: 69,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/images/Topup.png')}
                resizeMode="contain"
                style={{
                  height: 54,
                  width: 48,
                  // backgroundColor:'black'
                }}
              />
              <Image
                source={require('../../../assets/images/Dollar.png')}
                resizeMode="contain"
                style={{
                  height: 54,
                  width: 48,
                  marginLeft: 10,
                  borderColor: 'grey',
                  borderWidth: 0.2,
                  borderRadius: 3,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: 176,
            width: '100%',
            // marginVertical: 20,
          }}>
          <FlatList 
            horizontal={false}
            numColumns={4}
            key={4}
            data={Manu}
            renderItem={({item}) => {
              return (
                <TouchableOpacity 
                  style={{
                    height: 70,
                    width: 74,
                    marginHorizontal: 15,
                    marginVertical: 10,
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                      height: 40,
                      width: 40,
                      alignSelf: 'center',
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              height: 27,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: 'bold',
                fontStyle: 'Roboto-BoldItalic',
              }}>
              Today’s Promotions
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              View all
            </Text>
          </View>
          <View
            style={{
              height: 150,
              width: '100%',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={promo}
              renderItem={({item}) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={{
                        height: '100%',
                        width: 350,
                        marginHorizontal: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{
                          height: 150,
                          width: 350,
                          alignSelf: 'center',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              height: 27,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: 'bold',
                fontStyle: 'Roboto-BoldItalic',
              }}>
              Nearby Merchant
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              View all
            </Text>
          </View>
          <View
            style={{
              height: 200,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Food}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: '90%',
                      width: 120,
                      marginHorizontal: 5,
                      borderWidth: 0.5,
                      borderColor: 'gray',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        height: 150,
                        width: 100,
                        alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        borderTopWidth: 1,
                        borderColor: 'gray',
                        color: 'black',
                        fontWeight: 'bold',
                        marginHorizontal: 10,
                        textAlign: 'center',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
