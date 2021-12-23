import React from "react";
import "./Filtering.css";

const Filtering = () => {
  return (
    <>
      <div class="filtering">
        <div class="searching">
          <div class="bord">
            <input placeholder="Search" />
            <i class="bi bi-search"></i>
          </div>

          <div class="location">
            <select id="#">
              <option value="volvo">Location</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div class="sorting">
          <div class="sort">
            <label for="cars">Sort by:</label>

            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div class="rate">
            <label for="cars">Rate:</label>

            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>

      {/* <div className='searching'>
            <div className='bord'>
                <input placeholder='Search' />
                <i class="bi bi-search"></i>

            </div>
            
            <div className='location'>
                <select id="#">
                    <option value="volvo">Location</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            
        </div>
        <div className='sorting'>
            <div className='sort'>

            <label for="cars">Sort by:</label>

            <select id="cars">
            <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            </div>
            <div className='rate'>
             <label for="cars">Rate:</label>

                <select id="cars">
                <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div> */}
    </>
  );
};

export default Filtering;
