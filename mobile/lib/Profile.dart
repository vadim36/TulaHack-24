import 'package:flutter/material.dart';

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(100, 218, 112, 214),
      
      body: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                child: Column(
                  children: [
                   Padding(padding: EdgeInsets.fromLTRB(10,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 50,
                                child: Image.asset('Person.png'),
                              )
                          ),
                    Text("Тоби",style: TextStyle(fontSize: 20, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                    Text("Кот",style: TextStyle(fontSize: 15, color: Colors.black45, fontWeight: FontWeight.w900),textAlign: TextAlign.center,),
                  ],
                ),
              ),
            ],
          ),
          Row(
            children: [
              Padding(padding: EdgeInsets.fromLTRB(30,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 40,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Group35.png'),
                                ))
                          ),
                          Padding(padding: EdgeInsets.fromLTRB(30,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 40,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Group36.png'),
                                ))
                          ),
                           Padding(padding: EdgeInsets.fromLTRB(30,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 40,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Solid.png'),
                                ))
                          ),
                           Padding(padding: EdgeInsets.fromLTRB(30,10,10,10),
                              child: 
                              CircleAvatar(
                                
                                radius: 40,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Vector.png'),
                                ))
                          ),
            ],
          ),
          Row(
            children: [
              Padding(padding: EdgeInsets.fromLTRB(25,10,10,10),
                              child: 
              Text('Британец', style: TextStyle(fontSize: 16),)
          ), Padding(padding: EdgeInsets.fromLTRB(60,10,10,10),
                              child: 
              Text('4 КГ', style: TextStyle(fontSize: 16),)
          ), Padding(padding: EdgeInsets.fromLTRB(50,10,10,10),
                              child: 
              Text('7 февраля', style: TextStyle(fontSize: 16),)
          ), Padding(padding: EdgeInsets.fromLTRB(60,10,10,10),
                              child: 
              Text('Муж', style: TextStyle(fontSize: 16),)
          )
          ],
          ),
          Row(
            children: [
              Padding(padding: EdgeInsets.fromLTRB(20, 5, 5, 5),child: 
              Text(
                'Дневная рутина',style: TextStyle(fontSize: 25, color: Colors.deepPurpleAccent, fontWeight: FontWeight.w900),textAlign: TextAlign.center,
              )
          )],
          ),
          Row(
            children: [
              Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
              child: 
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.deepPurpleAccent,
                ),
                width: 100,
                height: 100,
                child: Column(
                  children: [
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 2, 2, 2),
                        child:
                        CircleAvatar(
                                
                                radius: 10,
                                child: Image.asset('Star1.png'),
                        )),
                        Padding(padding: EdgeInsets.fromLTRB(50, 2, 2, 2),
                        child:
                        CircleAvatar(
                                
                                radius: 10,
                                child: Image.asset('Star1.png'),
                        ))
                      ],
                    ),
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(5, 1, 5, 2),child:
                        Text('Утрення\nпрогулка', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),)
                    )],
                    ), Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 5, 2, 2),child:
                        Text('6:00', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),)
                    ),
                    
                    ],
                    )
                  ],
                ),
                
               ) ), Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
              child: 
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.deepPurpleAccent,
                ),
                width: 100,
                height: 100,
                child: Column(
                  children: [
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 2, 2, 2),
                        child:
                        CircleAvatar(
                                 backgroundColor:Colors.deepPurpleAccent,
                                radius: 10,
                                child: Image.asset('Group30.png'),
                        )),
                        Padding(padding: EdgeInsets.fromLTRB(50, 2, 2, 2),
                        child:
                        CircleAvatar(
                                backgroundColor:Colors.deepPurpleAccent,
                                radius: 10,
                                child: Image.asset('Group30.png'),
                        ))
                      ],
                    ),
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(5, 1, 5, 2),child:
                        Text('Завтрак', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),)
                    )],
                    ), Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 5, 2, 2),child:
                        Text('6:30', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),)
                    ),
                    
                    ],
                    )
                  ],
                ),
                
               ) ),
                Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
              child: 
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Color.fromARGB(100, 218, 112, 214),
                ),
                width: 100,
                height: 100,
                child: Column(
                  children: [
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 2, 2, 2),
                        child:
                        CircleAvatar(
                               backgroundColor: Color.fromARGB(100, 218, 112, 214),
                                radius: 10,
                                child: Image.asset('Rectangle92.png'),
                        )),
                       
                      ],
                    ),
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(5, 1, 5, 2),child:
                        Text('Витамины', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),)
                    )],
                    ), Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 5, 2, 2),child:
                        Text('7:00', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),)
                    ),
                    
                    ],
                    )
                  ],
                ),
                
               ) ), Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
              child: 
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Color.fromARGB(100, 218, 112, 214),
                ),
                width: 100,
                height: 100,
                child: Column(
                  children: [
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 2, 2, 2),
                        child:
                        CircleAvatar(
                                backgroundColor: Color.fromARGB(100, 218, 112, 214),
                                radius: 10,
                                child: Image.asset('Rectangle92.png'),
                        )),
                       
                      ],
                    ),
                    Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(5, 1, 5, 2),child:
                        Text('Обучение', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),)
                    )],
                    ), Row(
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(2, 5, 2, 2),child:
                        Text('7:20', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),)
                    ),
                    
                    ],
                    )
                  ],
                ),
                
               ) )
            ],
          ),Row(
            children: [
              Padding(padding: EdgeInsets.fromLTRB(10, 10, 10, 10), child: 
              Container(
               decoration:  BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.deepPurpleAccent,
                ),
                width: 490,
                height: 150,
                child: Column(
                  children: [
                    Row(
                      
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(5, 5, 5, 5), child: 
                        Text('01', style: TextStyle(fontSize: 40, fontWeight: FontWeight.w900, color: Colors.white),)
                    ),
                     Padding(padding: EdgeInsets.fromLTRB(5, 5, 5, 5), child: 
                        Text('Прием ветеринара\n10:00', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: Colors.white,),)
                    ), Padding(padding: EdgeInsets.fromLTRB(250, 0, 5, 5), child: 
                       CircleAvatar(
                                backgroundColor: Colors.deepPurpleAccent,
                                radius: 10,
                                child: Image.asset('Group33.png'),
                        ),)
                    
                    ],
                    ),
                    Row(
                      
                      children: [
                        Padding(padding: EdgeInsets.fromLTRB(10, 5, 5, 5), child: 
                        Text('Мая', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Colors.white),)
                    ),
                     Padding(padding: EdgeInsets.fromLTRB(5, 5, 5, 5), child: 
                        Text('Арсенальная 32\nВетклиника №8', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Colors.white,),)
                    ), 
                    
                    ],
                    ),
                  ],
                ),
               ) )
            ],
          )
        ]),
      bottomNavigationBar: Container(
        // height: 81,
        padding: EdgeInsets.symmetric(
          horizontal: 28,
          vertical: 24,
        ),
        decoration: ShapeDecoration(
          color: Color.fromARGB(100, 218, 112, 214),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
          ),
        ),
        child: Row(
         children: [
           Padding(padding: EdgeInsets.fromLTRB(50,5,100,10),
                              child: 
                              CircleAvatar(
                                 backgroundColor: Color.fromARGB(100, 218, 112, 214),
                                radius: 18,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('DomikGl.png'),
                                ))
                          ),
                  Padding(padding: EdgeInsets.fromLTRB(30,5,100,10),
                              child: 
                              CircleAvatar(
                                 backgroundColor: Color.fromARGB(100, 218, 112, 214),
                                radius: 18,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Domik.png'),
                                ))
                          ),
                Padding(padding: EdgeInsets.fromLTRB(30,5,10,10),
                              child: 
                              CircleAvatar(
                                 backgroundColor: Color.fromARGB(100, 218, 112, 214),
                                radius: 18,
                                child: InkWell(
                                  onTap: (){},
                                  child:
                                Image.asset('Profile.png'),
                                ))
                          ),
         ],
        ),
      ),
    );
  }
}
