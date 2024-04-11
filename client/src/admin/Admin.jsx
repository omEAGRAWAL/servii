import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="p-8">
      <div className="text-3xl font-bold mb-8">Welcome to the Admin Panel</div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="text-xl font-semibold mb-2">Terms & Conditions</div>
          <Link to="/admin/tc">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="text-xl font-semibold mb-2">Privacy Policy</div>
          <Link to="/admin/privacy">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="text-xl font-semibold mb-2">Refund Policy</div>
          <Link to="/admin/refund">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="text-xl font-semibold mb-2">FAQs</div>
          <Link to="/admin/faq">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
