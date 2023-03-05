/*const JSON_URL = "http://localhost:3000/";
const btnAlert = document.querySelector(".container__alert");
import React from "react";
import { useState, useEffect
 } from "react";


    
    async getPost(filterParams,route,method) {
        try {
          const request = await fetch(JSON_URL + route + filterParams, {
            method: method,
            headers: { "Content-Type": "application/json" },
          });
          const data = await request.json();
          const [items,setItems] = useState([]);
          setItems(data);
          console.log(typeof data);
          return data;
        } catch (error) {
          console.log(error);
          console("oh hubo un problema");
        }
      }


}*/