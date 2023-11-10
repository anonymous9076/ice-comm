import "./Bodyflav.css";
import Like from "./Like";

let num = 0;
let newarr = [];

const Bodyflav = ({ name, id, price, liftingdata }) => {
    let obj = {
        name: name,
        id: id,
        price: price,
        key: num++
    };

    const handleclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        newarr.push(obj);
        liftingdata(obj, newarr);
    }

    return (
        <>
            <div className="flavour-body mx-4 my-4">

                <img className="contimg" src={`./pics/${id}.jpg`} alt="ERROR 404" />
                <br></br>

                <div className="detail-area">
                    <span className="name neon " style={{ fontSize: "1.2em" ,color:'white' }}>
                        <h5>  {name}</h5>
                        <Like></Like>
                    </span>

                    <span className="rate">
                        <span>{price}/-Rs</span>
                        <button className="flavbtn my-2" onClick={handleclick} type="submit">
                            Add
                        </button>
                    </span>
                </div>

            </div>
        </>
    );
};

export default Bodyflav;
