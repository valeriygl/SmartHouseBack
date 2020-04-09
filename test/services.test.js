const services = require('../src/services');
const { filterByType, searchBySubname } = require('../src/services/device');

describe('services', () => {
  it('updateItemById() updates array by id', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = {
      updatedItems: [
        { id: 1, name: 'abc' },
        { id: 2, name: 'test' },
      ],
      wasUpdated: true,
    };

    const res = services.updateItemById(arr, 2, { name: 'test' });

    expect(expRes).toEqual(res);
  });

  it('updateItemById() does not update array by incorrect id', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = {
      updatedItems: [
        { id: 1, name: 'abc' },
        { id: 2, name: 'dfe' },
      ],
      wasUpdated: false,
    };

    const res = services.updateItemById(arr, 3, { name: 'test' });

    expect(expRes).toEqual(res);
  });

  it('getItemById() returns required item from array by id', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = { id: 1, name: 'abc' };

    const res = services.getItemById(1, arr);

    expect(expRes).toEqual(res);
  });

  it('getItemById() returns undefined from array by incorrect id', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = undefined;

    const res = services.getItemById(3, arr);

    expect(expRes).toEqual(res);
  });

  it('deleteItemById() deletes item from array', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = { updatedItems: [{ id: 2, name: 'dfe' }], wasUpdated: true };

    const res = services.deleteItemById(arr, 1);

    expect(expRes).toEqual(res);
  });

  it('deleteItemById() does not delete item from array because of incorrect id', () => {
    const arr = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'dfe' },
    ];

    const expRes = {
      updatedItems: [
        { id: 1, name: 'abc' },
        { id: 2, name: 'dfe' },
      ],
      wasUpdated: false,
    };

    const res = services.deleteItemById(arr, 15);

    expect(expRes).toEqual(res);
  });

  it('filterByType() filters array by type correctly', () => {
    const arr = [
      { id: 1, type: 'oven' },
      { id: 2, type: 'robot' },
      { id: 3, type: 'oven' },
      { id: 4, type: 'robot' },
      { id: 5, type: 'tv' },
      { id: 6, type: 'OVEN' },
      { id: 7, type: 'RoBoT' },
    ];

    const expRes = [
      { id: 2, type: 'robot' },
      { id: 4, type: 'robot' },
      { id: 7, type: 'RoBoT' },
    ];

    const res = filterByType(arr, 'RObOT');

    expect(expRes).toEqual(res);
  });

  it('searchBySubname() filters array by subname correctly', () => {
    const arr = [
      { id: 1, name: '12oven' },
      { id: 2, name: 'robot' },
      { id: 3, name: 'oven-Cool' },
      { id: 4, name: 'robot-bad' },
      { id: 5, name: 'tv' },
      { id: 6, name: 'cool-OVEN132' },
      { id: 7, name: 'RoBoT' },
    ];

    const expRes = [
      { id: 1, name: '12oven' },
      { id: 3, name: 'oven-Cool' },
      { id: 6, name: 'cool-OVEN132' },
    ];

    const res = searchBySubname(arr, 'OveN');

    expect(expRes).toEqual(res);
  });

  it('searchBySubname() filters array by subname correctly', () => {
    const arr = [
      { id: 1, name: '12oven' },
      { id: 2, name: 'robot' },
      { id: 3, name: 'oven-Cool' },
      { id: 4, name: 'robot-bad' },
      { id: 5, name: 'tv' },
      { id: 6, name: 'cool-OVEN132' },
      { id: 7, name: 'RoBoT' },
    ];

    const expRes = [
      { id: 1, name: '12oven' },
      { id: 3, name: 'oven-Cool' },
      { id: 6, name: 'cool-OVEN132' },
    ];

    const res = searchBySubname(arr, 'OveN');

    expect(expRes).toEqual(res);
  });

  it('paginate() returns correct information', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

    const expRes1 = {
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      totalPages: 1,
      page: 1,
      perPage: 30,
    };

    const expRes2 = {
      data: ['a', 'b', 'c', 'd'],
      totalPages: 3,
      page: 1,
      perPage: 4,
    };

    const expRes3 = {
      data: ['k', 'l'],
      totalPages: 3,
      page: 3,
      perPage: 5,
    };

    const res1 = services.paginate(arr, 2, 30);
    const res2 = services.paginate(arr, 1, 4);
    const res3 = services.paginate(arr, 4, 5);

    expect(expRes1).toEqual(res1);
    expect(expRes2).toEqual(res2);
    expect(expRes3).toEqual(res3);
  });
});
