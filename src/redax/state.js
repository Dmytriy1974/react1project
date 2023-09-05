import {rerenderEntireTree} from '../rerender'
export let state={
    profilePage: {
        postsData:[
    {id:1, message: "Hi, How are you?", likeCounts:15},
    {id:2, message: "It's my first message", likeCounts:20}]
    },
   messagesPage: {
    abonentData: [
      { isFriend: false, id: 1, name: 'Dimych', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVDEKxJUaZwFXdHwZ2HHH_r-QI_wEzQGiUQ&usqp=CAU'
    },
      { isFriend: true, id: 2, name: 'Andrey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2izzv6dQ2bq2rPgjzdKDNN3yfVx-YDvaOA&usqp=CAU'
    },
      { isFriend: true, id: 3, name: 'Sveta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47ASN-MW8K-nV9Ck_UZmUFmPF-vRavR5zOA&usqp=CAU'
    },
      { isFriend: false, id: 4, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU'
    },
      { isFriend: false, id: 5, name: 'Victor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU'
    },
      { isFriend: true, id: 6, name: 'Valera', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnK1ckF5OFYR6pitgRrtN5eshysmmFGatQCwyvK078NhOW8yrTMOnMQmXvYoeYM1t4CQ&usqp=CAU'
    }],
messagesData: [
      { fromDim: true, id: 1, message: 'Hi' },
      { fromDim: false, id: 2, message: 'How are you, Dimych?' },
      { fromDim: true, id: 3, message: 'How its going?' }]
   }  
    }
export let addPosts=(inputMessage)=>{
let post =  {id:3, message: inputMessage, likeCounts:1}
   state.profilePage.postsData = [...state.profilePage.postsData, post]
    rerenderEntireTree(state)
}

