export function manejarCambio (valor: string, dispatch: React.Dispatch<{ type: string; value: number }>, pr : string, setInteracion? : React.Dispatch<React.SetStateAction<number>>) {
        dispatch({ type: pr, value: parseInt(valor) });
        if (setInteracion) setInteracion(int => int + 1);
}