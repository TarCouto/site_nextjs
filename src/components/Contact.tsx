export default function Contact() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Contato</h2>
                <form className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="block text-left font-semibold mb-2">Nome</label>
                        <input type="text" className="w-full p-3 border rounded" placeholder="Seu nome" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left font-semibold mb-2">Email</label>
                        <input type="email" className="w-full p-3 border rounded" placeholder="Seu email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left font-semibold mb-2">Mensagem</label>
                        <textarea className="w-full p-3 border rounded" placeholder="Sua mensagem" rows={5}></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Enviar</button>
                </form>
            </div>
        </section>
    )
}