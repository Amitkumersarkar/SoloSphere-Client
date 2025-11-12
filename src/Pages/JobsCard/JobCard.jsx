import { Link } from 'react-router-dom';
import { format, parse } from 'date-fns';

const JobCard = ({ job }) => {
    const { title, deadline, category, min_price, max_price, description, _id } = job || {};

    let formattedDeadline = 'Deadline: Not available';

    if (deadline) {
        let parsedDate;

        const isoDate = new Date(deadline);
        if (!isNaN(isoDate)) {
            parsedDate = isoDate;
        } else {
            try {
                parsedDate = parse(deadline, 'dd-MM-yyyy', new Date());
            } catch (err) {
                console.error('Date parse error:', err);
            }
        }

        if (parsedDate && !isNaN(parsedDate)) {
            formattedDeadline = `Deadline: ${format(parsedDate, 'P')}`;
        }
    }

    return (
        <Link
            to={`/job/${_id}`}
            className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
        >
            <div className="flex items-center justify-between">
                <span className="text-xs font-light text-gray-800">{formattedDeadline}</span>
                <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full">
                    {category}
                </span>
            </div>

            <div>
                <h1 className="mt-2 text-lg font-semibold text-gray-800">{title}</h1>
                <p className="mt-2 text-sm text-gray-600">
                    {description?.substring(0, 70)}...
                </p>
                <p className="mt-2 text-sm font-bold text-gray-600">
                    Range: ${min_price} - ${max_price}
                </p>
                <p className="mt-2 text-sm font-bold text-gray-600">Total Bids: 0</p>
            </div>
        </Link>
    );
};

export default JobCard;
