import { ChangeEvent } from "react";
import { Component } from "react";
import { ContactForm } from "../ContactForm";

type CounterType = {
	count: number;
	username: string;
	phone: string;
};

export class Counter extends Component<{}, CounterType> {
	state = {
		count: 0,
		username: "",
		phone: "",
	};

	handleDecrement = () => {
		this.setState((prev) => {
			return { count: prev.count - 5 };
		});
	};

	handleIncrement = () => {
		this.setState((prev) => ({ count: prev.count + 5 }));
	};

	handleMultiply = () => {
		this.setState((prev) => ({ count: prev.count * 5 }));
	};

	handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ username: event.target.value });
	};

	handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ phone: event.target.value });
	};

	componentDidMount() {
		console.log("komponent zamontowany");
	}

	componentDidUpdate(prevProp: {}, prevState: CounterType) {
		if (prevState.count !== this.state.count) {
			console.log("Liczba zaktualizowana");
		}
		if (prevState.username !== this.state.username) {
			console.log("Imię zaktualizowano");
		}
		if (prevState.phone !== this.state.phone) {
			console.log("Numer telefonu zaktualizowany");
		}
	}

	render() {
		const { count, username, phone } = this.state;
		return (
			<div>
				<span>{count}</span>
				<button onClick={this.handleDecrement}>-5</button>
				<button onClick={this.handleIncrement}>+5</button>
				<button onClick={this.handleMultiply}>*5</button>
				<ContactForm
					name={username}
					phone={phone}
					changeName={this.handleChangeName}
					changePhone={this.handleChangePhone}
				/>
			</div>
		);
	}
}
