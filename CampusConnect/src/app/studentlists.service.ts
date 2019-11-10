import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class StudentlistsService {
currentstudent: any;
constructor() { }
getdata(){
  let nameEmailMapping = new Map();
  nameEmailMapping.set("Lokesh", "xtc598@mail.umkc.edu");
  nameEmailMapping.set("Lyu", "tc578@mail.umkc.edu");
  nameEmailMapping.set("Ryan", "tc599@mail.umkc.edu");
  nameEmailMapping.set("TAOTAO", "tx598@mail.umkc.edu");
  nameEmailMapping.set("Chan", "tj598@mail.umkc.edu");
  nameEmailMapping.set("Hanson", "ac598@mail.umkc.edu");
  nameEmailMapping.set("Gabriel", "sc598@mail.umkc.edu");
  nameEmailMapping.set("Max", "tv548@mail.umkc.edu");
  nameEmailMapping.set("Louis", "r6sd598@mail.umkc.edu");
  nameEmailMapping.set("Rick", "ttkjozjc598@mail.umkc.edu");
  nameEmailMapping.set("Leo", "tcabdai@mail.umkc.edu");
  return nameEmailMapping;
}
}

