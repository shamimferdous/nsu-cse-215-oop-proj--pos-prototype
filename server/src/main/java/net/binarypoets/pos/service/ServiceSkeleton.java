package net.binarypoets.pos.service;
import net.binarypoets.pos.exception.FourOFourException;

import java.util.List;

public abstract class ServiceSkeleton<T> {

    public abstract T create(T t);

    public abstract List<T> getAll();

    public abstract T getById(long id) throws FourOFourException;

    public abstract T update(long id, T payload) throws FourOFourException;

    public abstract void delete(long id) throws FourOFourException;
}
