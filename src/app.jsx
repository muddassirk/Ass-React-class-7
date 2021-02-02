// import React, { useState } from ('react')
// import React, { useState, useRef } from 'react';
import React, { useState, useRef, useEffect } from 'react';



function Room() {







    const [userData, setuserData] = useState([]);
    // var myPost = useRef();

    useEffect(() => {
        var userDatas = JSON.parse(localStorage.getItem("userDatas"))
        if (userDatas) {
            setuserData(userDatas)
        }
    }, [])


    function addPost() {
        // var userPost = myPost.current.value;
        console.log("addpost fuction");
        var userPost = document.getElementById("userPOst").value;

        // setuserData([...userData, userPost])
        setuserData([...userData, userPost])

        localStorage.setItem("userDatas", JSON.stringify(userData))
        document.getElementById("userPOst").value = ""
    }

    function deleteItem(index) {

        console.log("deletebtn");
        var newUserData = [...userData]
        newUserData.splice(index, 1)
        setuserData(newUserData)
    }
    function editBtn(index) {
        console.log("edit btn");
        var updatePost = prompt("Updated post")
        var oldUserData = [...userData]
        oldUserData[index] = updatePost;
        setuserData(oldUserData)

    }



    return <div style={{ textAlign: "center" }}>

        {/* <input type="text" ref={myPost} placeholder="What happening"/> */}
        <input required type="ml-1 text" id="userPOst" placeholder="What happening" />
        <button className="ml-1 btn btn-outline-primary" onClick={addPost}> Add</button>


        {
            userData.map((value, index) => {
                return <div key={index}>
                    <p className="mt-1">Post: {value}
                        <button className="ml-1 btn btn-outline-primary" onClick={(e) => deleteItem(index)}>Delete</button>
                        <button className="ml-1 btn btn-outline-primary" onClick={(e) => editBtn(index)}>edit</button>
                    </p>
                    <br />
                    <br />
                    <img width="300px"
                        src="https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-bullet/source/royal-enfield-bullet5e8305bae5c49.jpg?tr=w-360" alt="" />
                </div>
            })
        }

    </div>


}


export default Room




