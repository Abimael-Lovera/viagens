export function Alert({ message }) {
	return <div className="bg-red-100 border border-red-300 rounded-lg text-red-700 px-4 py-3 relative mb-2 text-center">
		<span className="inline-block">{message}</span>
	</div>;
}
