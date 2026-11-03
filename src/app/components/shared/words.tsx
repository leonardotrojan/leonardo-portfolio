interface WordsProps {
    text: string
    /** Atraso inicial e intervalo entre palavras, em ms. */
    delay?: number
    stagger?: number
}

/**
 * Quebra o texto em palavras recortadas por `.mask`, para a animação de
 * subida. A frase continua legível para leitores de tela como um todo.
 */
const Words = ({ text, delay = 0, stagger = 60 }: WordsProps) => {
    const words = text.split(' ')

    return (
        <>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true">
                {words.map((word, i) => (
                    <span key={i}>
                        <span className="mask">
                            <span style={{ "--delay": `${delay + i * stagger}ms` } as React.CSSProperties}>
                                {word}
                            </span>
                        </span>
                        {i < words.length - 1 && ' '}
                    </span>
                ))}
            </span>
        </>
    )
}

export default Words;
