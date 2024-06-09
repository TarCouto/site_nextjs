// src/components/StyledButton.tsx
interface StyledButtonProps {
    text: string;
}

export default function StyledButton({ text }: StyledButtonProps) {
    return (
        <div className="flex justify-center my-10">
            <button className="flex items-center space-x-2 px-6 py-2 bg-white text-gray-800 font-semibold border border-gray-300 rounded-full shadow-sm hover:bg-gray-100">
                <span className="text-blue-500">—</span>
                <span className="uppercase">{text}</span>
            </button>
        </div>
    );
}
