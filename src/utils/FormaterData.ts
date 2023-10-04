export function formatData(data: Date): string {
	const dia = String(data.getDate()).padStart(2, "0");
	const mes = String(data.getMonth()).padStart(2, "0");
	const ano = data.getFullYear();
	const hora = String(data.getHours() + 3).padStart(2, "0");
	const minuto = String(data.getMinutes()).padStart(2, "0");
	return `${ano}-${mes}-${dia}T${hora}:${minuto}:00Z`;
}
