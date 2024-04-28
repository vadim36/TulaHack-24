import 'package:flutter/material.dart';
import 'package:pets_app1/Home.dart';


class Login_Page extends StatefulWidget {
  const Login_Page({Key? key}) : super(key: key);

  @override
  State<Login_Page> createState() => _Login_Page();
}

class _Login_Page extends State<Login_Page> {
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
                  Padding(padding: EdgeInsets.fromLTRB(0, 50, 0, 50),
                  
                    child: Image.asset('anyteil2.png'),
                  
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(10, 0, 10, 5),child: 
                    Container(
                      width: 2000,
                      height: 580,
                     
                         decoration: BoxDecoration( borderRadius: BorderRadius.circular(10),
                    
                      color: Color.fromARGB(100, 245, 125, 121),),
                      child: Column(
                        children: [
                          Text("Заполните данные\nвашего хвостика",style: TextStyle(fontSize: 20, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                          Row(
                            children: [
                              Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group7.png'),
                              )
                          ),
                          Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group8.png'),
                              )
                          ),Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group9.png'),
                              )
                          ),Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group10.png'),
                              )
                          ),Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group11.png'),
                              )
                          ),
                          Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                backgroundColor: Colors.white,
                                radius: 30,
                                child: Image.asset('Group12.png'),
                              )
                          )

                          ],
                          ),
                        Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
        
                                decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Имя',
        ),
      ),
                          )
                      ),
                       Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
        
                                decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Порода',
        ),
      ),
                          )
                      ), Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
        
                                decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Возраст',
        ),
      ),
                          )
                      ), Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
        
                                decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Вес животного',
        ),
      ),
                          )
                      ),
                      Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration( borderRadius: BorderRadius.circular(10),
                    
                      color: Color.fromARGB(100, 	118, 138, 238),),
                    width: 200,
                    height: 80,
                  
                    child: 
                    
                  MaterialButton(
                    
                    onPressed: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context) => Home_Page()));
                    },
                    child: Text("Продолжить", style: TextStyle(fontSize: 30),),
                  )
                  )
                      ],
                      
                      
                      
                      
                 
                      
                      ),
                      ),
                    ),
                    
                 
                ],
               ),
            )
          ],
        ),
      ),
    );
  }
}