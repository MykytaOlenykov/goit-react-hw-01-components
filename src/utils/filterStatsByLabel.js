export function filterStatsByLabel(stats) {
  return stats.reduce((acc, stat) => {
    const accStat = acc.find(accStat => accStat.label === stat.label);

    if (!accStat) {
      acc.push({ ...stat });
      return acc;
    }

    accStat.percentage += stat.percentage;
    return acc;
  }, []);
}
