import 'package:flutter/material.dart';
import 'package:pets_app1/Profile.dart';


class Home_Page extends StatefulWidget {
  const Home_Page({Key? key}) : super(key: key);

  @override
  State<Home_Page> createState() => _Home_Page();
}

class _Home_Page extends State<Home_Page> {
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
                color: Color.fromARGB(100, 218, 112, 214)
                ),
                  child: Column(
                    children: [
                       Padding(padding: EdgeInsets.fromLTRB(0, 30, 0, 15),
                  
                    child: Image.asset('anyteil2.png'),
                  
                  ),
                  Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 0),
                  child: Text("Заполните ваши данные",style: TextStyle(fontSize: 25, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                  ),
                  Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 50,
                                child: Image.asset('Person.png'),
                              )
                          ),
                           Padding(padding: EdgeInsets.fromLTRB(10, 0, 10, 10),
                  child: InkWell(
                    onTap: (){},
                    child: 
                  Text("изменить фото",style: TextStyle(fontSize: 15, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                            ) ),
                             Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
        
                                decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Ваше Имя',
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
                                labelText: 'Email',
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
                                labelText: 'Телефон',
        ),
      ),
                          )
                      ), Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child:
                          SizedBox(
                               width: 450,
                                 child: TextField(
                                   obscureText: true,
        
                                decoration: InputDecoration(
                                  
                                border: OutlineInputBorder(),
                                labelText: 'Пароль',
        ),
      ),
                          )
                      ),
                      Row(
                        children: [
                         Padding(padding: EdgeInsets.fromLTRB(20, 5, 10, 10),
                  child: InkWell(
                    onTap: (){},
                    child: 
                  Text("изменить фото",style: TextStyle(fontSize: 15, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                            ) ),]),
                      Container(
                    alignment: Alignment.center,
                    decoration: BoxDecoration( borderRadius: BorderRadius.circular(10),
                    
                      color: Color.fromARGB(100, 	118, 138, 238),),
                    width: 150,
                    height: 60,
                  
                    child: 
                    
                  MaterialButton(
                    
                    onPressed: (){
                      Navigator.push(context, MaterialPageRoute(builder: (context) => Profile()));
                    },
                    child: Text("Сохранить", style: TextStyle(fontSize: 20),),
                  )
                  )
                    ],
                  ) ,
               )
               
               ]))
    );
  }
}