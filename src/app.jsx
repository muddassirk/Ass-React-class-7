// import React, { useState } from ('react')
// import React, { useState, useRef } from 'react';
import React, { useState, useRef, useEffect } from 'react';
// import "./index.css";
import './index.css';




function Room() {

    const [userData, setuserData] = useState([]);
    var userName = useRef();

    useEffect(() => {
        var userDatas = JSON.parse(localStorage.getItem("userDatas"))
        if (userDatas) {
            setuserData(userDatas)
        }
    }, [])


    function addPost() {
        console.log("addpost fuction");
        var name = userName.current.value;
        var userPost = document.getElementById("userPOst").value;

        var data = {
            name: name,
            userPost: userPost
        }

        // setuserData([...userData, userPost])
        // setuserData([...userData, userPost])
        setuserData([...userData, data])

        localStorage.setItem("userDatas", JSON.stringify(userData))
        userName.current.value = ""
        document.getElementById("userPOst").value = ""
    }

    function deleteItem(index) {

        console.log("deletebtn");
        var newUserData = [...userData]
        newUserData.splice(index, 1)
        setuserData(newUserData)

        // var nuUser = [...userData]
        // nuUser.splice(index,1)
        // setuserData(nuUser)

    }
    function editBtn(index) {
        console.log("edit btn");
        var updatePost = prompt("Updated post")
        var oldUserData = [...userData]
        oldUserData[index].userPost = updatePost;
        setuserData(oldUserData)



    }



    return <div className="mainDIv" style={{}}>
        Name:
        <input className="ml-2 form-control" type="text" ref={userName} placeholder="Enter your Name" />
        Post:
        <input className="ml-2 mt-2 form-control" required type="ml-1 text" id="userPOst" placeholder="What happening" />
        <button className="ml-2 mt-2 btn btn-outline-primary" onClick={addPost}> Add</button>


        {
            userData.map((value, index) => {
                return <div  key={index}>

                    <h1 className="name mt-5">
                        <img width="50px" height="50px" className="rounded-circle mr-2"
                            src="data:image/jpeg;base64,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" alt="" />

                        {value.name}</h1>
                    <p className="mt-1 ml-5 userPost"> {value.userPost} <br/>
                        <button className="ml-1 btn btn-outline-primary" onClick={(e) => deleteItem(index)}>Delete</button>
                        <button className="ml-1 btn btn-outline-primary" onClick={(e) => editBtn(index)}>edit</button>
                    </p>
                    {/* <br /> */}
                    <img width="100%" src="https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-bullet/source/royal-enfield-bullet5e8305bae5c49.jpg?tr=w-360" alt="" />
                </div>
            })
        }

    </div>


}


export default Room




