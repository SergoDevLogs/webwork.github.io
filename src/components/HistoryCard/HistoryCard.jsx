import styles from './historyCard.module.scss'

export default function HistoryCard(props) {
    const {
        series,
        gloss60,
        viscosity,
        deltaE,
        deltaL,
        deltaA,
        colorDifferenceBetweenBatchesDeltaE,
        d_over_8,
        deltaB,
        dryingTime,
        peakTempC,
        primerThickness,
        adhesion,
        solventResistance,
        visualSurfaceControl,
        appearance,
        numCoatsPerBatch,
        finenessDegree,
        solidByVolume,
        primer,
        liquidFilmThickness,
        thicknessForEnamel,
        theoreticalConsumption,
        bendingStrength,
        reverseImpactResistance,
        pencilHardness,
        erichsenTensileStrength,
        gloss,
        density,
        nonvolatileMassFraction,
    } = props;

    const rows = [
        ["Серия", series],
        ["Блеск при 60°", gloss60],
        ["Условная вязкость", viscosity],
        ["ΔE", deltaE],
        ["ΔL", deltaL],
        ["Δa", deltaA],
        ["Цветовое различие между партиями ΔE", colorDifferenceBetweenBatchesDeltaE],
        ["d/8", d_over_8],
        ["Δb", deltaB],
        ["Время сушки", dryingTime],
        ["Пиковая темп. металла, °C", peakTempC],
        ["Толщина для грунта", primerThickness],
        ["Адгезия", adhesion],
        ["Стойкость к растворителям", solventResistance],
        ["Визуальный контроль поверхности", visualSurfaceControl],
        ["Внешний вид", appearance],
        ["Количество выкрасок с партии", numCoatsPerBatch],
        ["Степень перетира", finenessDegree],
        ["Твердое вещество по объему", solidByVolume],
        ["Грунт", primer],
        ["Толщина пленки (жидк.)", liquidFilmThickness],
        ["Толщина для эмали/лака/чернил", thicknessForEnamel],
        ["Теоретический расход", theoreticalConsumption],
        ["Прочность при изгибе", bendingStrength],
        ["Стойкость к обратному удару", reverseImpactResistance],
        ["Твердость по карандашу", pencilHardness],
        ["Прочность растяжения по Эриксену", erichsenTensileStrength],
        ["Блеск", gloss],
        ["Плотность", density],
        ["Массовая доля нелетучих веществ", nonvolatileMassFraction],
    ];

    return (
        <>
            <article className={`w-full max-w-md bg-white dark:bg-slate-800 rounded-lg shadow p-4 ${className || ""}`}>
                <div className="flex flex-col gap-3">
                    {items.map(([label, value]) => (
                        <div key={label} className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-300">{label}</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{value ?? "—"}</span>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}