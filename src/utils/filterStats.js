export function filterStats(stats) {
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

// [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];
