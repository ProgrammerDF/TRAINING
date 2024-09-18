import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const Register = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Buat object user
  let dbUser = {
    username: 'Angga',
    password: 'Angga'
  };

  const handlerLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (username === dbUser.username && password === dbUser.password) {
        setIsLoading(false);
        Alert.alert("Anda berhasil masuk");
        navigation.navigate('Beranda'); // Pindah ke halaman Beranda setelah login berhasil
      } else {
        setIsLoading(false);
        Alert.alert("User tidak terdaftar");
      }
    }, 2000); // Waktu tunggu 2 detik untuk umpan balik lebih cepat
  };

  return (
    <View style={styles.View}>
      {/* Logo */}
      <Image source={{ uri: 'https://app.darulfithrah.com/images/logo.png' }} style={styles.logo} />

      {/* Bungkus View */}
      <View style={styles.viewpem}>
        {/* Header Login */}
        <View style={styles.viewlogin}>
          <Text style={styles.textlogin}>Login</Text>
        </View>

        {/* Garis Pemisah */}
        <View style={styles.garis} />

        {/* Username Input */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ color: 'black', marginTop: 10 }}>Username/Email</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          {/* Password Input */}
          <Text style={{ color: 'black', marginTop: 10 }}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // Teks tersembunyi untuk password
          />

          {/* Tombol Login */}
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlerLogin} // Panggil handlerLogin saat tombol ditekan
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Keterangan Login Wali Santri */}
      <View style={styles.loginwali}>
        <Text style={styles.textloginwali}>Login Wali Santri</Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f6'
  },
  logo: {
    width: 200,
    height: 74.9,
  },
  viewpem: {
    width: 350,
    height: 350,
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  viewlogin: {
    width: '100%',
    height: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  textlogin: {
    color: 'black',
    fontSize: 18,
  },
  garis: {
    width: '100%',
    height: 1,
    backgroundColor: '#f1f2f6',
  },
  input: {
    color: 'black',
    height: 35,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
  loginwali: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
  },
  textloginwali: {
    color: 'black',
  },
});