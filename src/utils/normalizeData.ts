export type NormalizedData<T> = { byId: { [key: string]: T }, allIds: string[] };

export const normalizeData = <T extends { id: string }>(data: T[]): NormalizedData<T> => {
    return data.reduce((dataList: NormalizedData<T>, currentValue: T) => {
        dataList.byId[currentValue.id] = currentValue;
        dataList.allIds.push(currentValue.id);
        return dataList;
    }, {byId: {}, allIds: []});
}