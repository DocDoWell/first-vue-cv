<template>
    <section>
    <nav>
          <img src="./images/docDowell.png" alt="DocDoWell" class="center">
      </nav>
    <article v-if="detailsAreVisible">
     <h2>Personal Technology Vision</h2>
     <p>Andrew’s ambition is to own a comprehensive technical skill set that will enable him to be an expert on creating distributed, fault tolerant, scalable and secure technological solutions.</p> 
     <p>This is applicable to all aspects of the software development lifecycle, from translating abstract ideas into functioning code to monitoring and hosting production standard services.</p>
    </article>
    </section>
   
     <button @click="presentDetails">Show Personal Vision</button>
     <!--button @click="tbc">Show Professional History</!--button>
     <button @click="tbc">Show Academic History</button>
     <button-- @click="tbc">Useful links</button-->
    
 </template>
 
 <script>
 export default{
     data(){
         return{
             detailsAreVisible: false
         }
     },
     methods: {
         presentDetails(){
             this.detailsAreVisible = !this.detailsAreVisible
         }
     }
 }
 </script>

<style>
/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 40%;
  height: 70%;
}

article {
  float: left;
  padding: 20px;
  width: 55%;
  background-color: #f1f1f1;
}

/* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
  height: 300p
}

/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 600px) {
  nav, article {
    width: 500%;
    height: auto;
  }
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  height: auto;
  width: auto;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

h2{
    color: #317873;  
}

  </style>