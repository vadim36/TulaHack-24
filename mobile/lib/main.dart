import 'package:flutter/material.dart';
import 'package:pets_app1/Login.dart';
import 'package:pets_app1/Profile.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
      body: Center(
        child: Column(
          children: [
            Container(
              width: 2000,
              height: 725,
               decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                gradient: LinearGradient(
                   
                    colors: [
                               Color.fromARGB(100,230, 230, 250),
                              Color.fromARGB(100, 218, 112, 214),
                              
                    ],
                )
               ),child: Column(
                children: [
                  Padding(padding: EdgeInsets.fromLTRB(100, 50, 100, 100),
                  
                    child: Image.asset('LOGO.png'),
                  
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(100, 150, 100, 100),child: 
                  Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration( borderRadius: BorderRadius.circular(10),
                    
                      color: Color.fromARGB(100, 	118, 138, 238),),
                    width: 150,
                    height: 80,
                  
                    child: 
                    
                  MaterialButton(
                    
                    onPressed: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context) => Login_Page()));
                    },
                    child: Text("Начать", style: TextStyle(fontSize: 30),),
                  )
                  )
                ) ],
               ),
            )
          ],
        ),
      ),
    );
  }
}
