import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Contact() {
  return (
    <>
    <Header></Header>
<div class="min-h-screen flex justify-center items-center ">
<table class="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
  <thead>
    <tr class="bg-red-500 text-black">
      <th class="py-2 px-4 text-left">City</th>
      <th class="py-2 px-4 text-left">Age</th>
      <th class="py-2 px-4 text-left">Contact </th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b text-black border-blue-500">
      <td class="py-2 px-4">John Doe</td>
      <td class="py-2 px-4">25</td>
      <td class="py-2 px-4">3424524323</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Jane Smith</td>
      <td class="py-2 px-4">30</td>
      <td class="py-2 px-4">4423523523</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bob Johnson</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">2364346234</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bob Johnson</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">2361356422</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bob Johnson</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">3355335352</td>
    </tr>
    <tr class="bg-white  text-black border-b border-blue-500">
      <td class="py-2 px-4">Bob Johnson</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">8347283478   </td>
    </tr>
  </tbody>
</table>
</div>
   
    <Footer></Footer>
    </>
  )
}

export default Contact
