"use server";
import Image from "next/image";
import { getTransactionHistory } from "../app/api/actions/getTransactionHistory";
import ViewAll from "./viewAll";


interface Ttransaction {
  id: number;
  userId: string;
  type: string;
  amount: number;
  timestamp: Date;
  status: string;
  toUserName: string;
  toUserImage: string | null;
}


interface Props {
  children?: React.ReactNode;
  title: string;
  viewAll?: boolean;
  size?: number;
}

const Dtransactions = [
  {
    id: 1,
    toUserName: "Spotify",
    amount: 15.0,
    status: "Processing",
    timestamp: "Wed 1:00pm",
    type: "Subscriptions",
    toUserImage: "🎵",
  },
  {
    id: 2,
    toUserName: "Alexa Doe",
    amount: 88.0,
    status: "Success",
    timestamp: "Wed 2:45am",
    type: "Deposit",
    toUserImage: "👤",
  },
  {
    id: 3,
    toUserName: "Figma",
    amount: 18.99,
    status: "Processing",
    timestamp: "Tue 6:10pm",
    type: "Income",
    toUserImage: "🎨",
  },
  {
    id: 4,
    toUserName: "Fresh F&V",
    amount: 88.0,
    status: "Success",
    timestamp: "Tue 12:15pm",
    type: "Groceries",
    toUserImage: "FV",
  },
  {
    id: 5,
    toUserName: "Sam Sulek",
    amount: 40.2,
    status: "Declined",
    timestamp: "Tue 5:40am",
    type: "Food",
    toUserImage: "👤",
  },
];

const Transactions =async ({ children, title,viewAll=false ,size}: Props) => {
  const {transactions,error,message} = await getTransactionHistory();
  // console.log(message);

  function formatDate(dateString:Date) {
    const date = new Date(dateString);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = dayNames[date.getDay()];
    
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${day} ${hours}:${formattedMinutes}${ampm}`;
  }
  return (
    <div className="p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {viewAll?<ViewAll />:""}
      </div>
      <div className="space-y-4">
        {
          transactions.length>0?
          (transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                
              {transaction.toUserImage != null ?
              (
                <Image src={transaction.toUserImage} alt="User Image" className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" width={50}  height={50}/>
              )
                :(<div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-200 `}
                >
                  "🏦"
                </div>)}
                <div className="ml-3">
                  <p className="font-medium">{transaction.toUserName}</p>
                  <p className="text-xs text-gray-500">{formatDate(transaction.timestamp)}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-medium ${transaction.type === "Deposit" ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.type === "Deposit" ? "+$" : "-$"}
                  {transaction.amount.toFixed(2)}
                </p>
                <div className="flex items-center mt-1">
                  <span
                    className={`w-2 h-2 rounded-full mr-1 ${
                      transaction.status === "Success"
                        ? "bg-green-500"
                        : transaction.status === "Processing"
                          ? "bg-blue-500"
                          : "bg-red-500"
                    }`}
                  ></span>
                  <span className="text-xs text-gray-500">
                    {transaction.status}
                  </span>
                  <span
                    className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      transaction.type === "Deposit"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </div>
              </div>
            </div>
          )))
        :(Dtransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  transaction.toUserImage === "🎵"
                    ? "bg-green-500"
                    : transaction.toUserImage === "👤"
                      ? "bg-gray-400"
                      : transaction.toUserImage === "🎨"
                        ? "bg-purple-500"
                        : "bg-gray-200 text-gray-700"
                }`}
              >
                {transaction.toUserImage}
              </div>
              <div className="ml-3">
                <p className="font-medium">{transaction.toUserName}</p>
                <p className="text-xs text-gray-500">{transaction.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-medium ${transaction.amount >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {transaction.amount >= 0 ? "+$" : ""}
                {transaction.amount.toFixed(2)}
              </p>
              <div className="flex items-center mt-1">
                <span
                  className={`w-2 h-2 rounded-full mr-1 ${
                    transaction.status === "Success"
                      ? "bg-green-500"
                      : transaction.status === "Processing"
                        ? "bg-blue-500"
                        : "bg-red-500"
                  }`}
                ></span>
                <span className="text-xs text-gray-500">
                  {transaction.status}
                </span>
                <span
                  className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    transaction.type === "Subscriptions"
                      ? "bg-blue-100 text-blue-800"
                      : transaction.type === "Deposit"
                        ? "bg-green-100 text-green-800"
                        : transaction.type === "Income"
                          ? "bg-green-100 text-green-800"
                          : transaction.type === "Groceries"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                  }`}
                >
                  {transaction.type}
                </span>
              </div>
            </div>
          </div>
        )))
        }
      </div>
    </div>
  );
};



export default Transactions;
