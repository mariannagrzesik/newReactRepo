import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import {Profile, ProfileType} from "./components/Profile";
import {profileList} from "./utils/mockUsers"
import { ProfileList } from "./components/ProfileList";
import { SearchForm } from "./components/SearchForm";
import { Form } from "./components/Form";
import { Counter } from "./components/Counter";
import { Article } from "./components/Article";
import { Input } from "./components/Input";

type AppProps = {
	searchTermValue: string;
	usersList: ProfileType[];
};

class App extends React.Component<{}, AppProps> {

	constructor(props: any){
	super(props);
	this.state={
		searchTermValue: "",
		usersList: profileList,
		}
	}
	

	

	// const titleText="Pierwsza strona w react"
	// const list=["Home", "Info", "Gallery", "Contact"];
	// const prop={
	// 	title: titleText,
	// 	list,
	// }
	// const listFooter=["Pierwsza apka w react", "Mariannna Grzesik", "19.06"];
	// const propFooter={
	// 	 list: listFooter,
	//  }
	//  const titleMain="bvla";
	//  const articleMain="Loremiwsjfjdsbfhgdsfyfdshkfjhdshgfdhsg";
	
	// const array=["kwsjdh", "sdhf"];
	// const word="jestem stringkiem";
	// const obj={
		// 	a: ['ahdsgfa']
		// 		}
		// const newObj={
			// 	d: [...obj.a, word]
			// }
			
			// const newArray=[...array, word]
			handleAddUser=(user: ProfileType)=>{
				console.log(user);
				this.setState((prev)=>({usersList: [...prev.usersList, user] }))
				setTimeout(()=>{console.log(this.state)}, 2000)
			};
	 
  	handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		  this.setState({
			  searchTermValue: event.target.value,
		  });

  };
	 render(){
		 const {searchTermValue}=this.state;
	 
		 return (
			 <div className="App">
				 <Input />
				 {/* <Counter /> */}
				 {/* <SearchForm searchTerm={searchTermValue} handleSearchTerm={this.handleSearch} />*/}
				 
				 
				 {/* <Form handleAddUser={this.handleAddUser} />
				 <ProfileList list={profileList} searchTerm={searchTermValue}/>  */}
				 {/* <ul>
				 {
				 profileList.map(user=>{
					 return <li key={user._id}><Profile {...user}/></li>
				 })
				 
				 }
				 </ul> */}
				 {/* {profileList.map(profile=><Profile{...profile}/>)} */}
	 
				 {/* {profileList.map(profile=>{
					 <div>
						 <Profile {...profile}/>
					 </div>
				 })} */}
				  {/* <Header {...prop}/>
				   <Main title={titleMain} article={articleMain}/>
				 <Footer {...propFooter}/> */}
				 {/* <Article article="sjfdgsfgsvgafvsjbfgsdvbfh"/> */}
				 
			 </div>
		 );
		}
	
};

export default App;
