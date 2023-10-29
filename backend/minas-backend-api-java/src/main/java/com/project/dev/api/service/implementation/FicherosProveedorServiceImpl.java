/*
 * @fileoverview    {FicherosProveedorServiceImpl}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.service.implementation;

import com.project.dev.api.domain.FicherosProveedor;
import com.project.dev.api.dto.FicherosProveedorDTO;
import com.project.dev.api.repository.FicherosProveedorRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.FicherosProveedorMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code FicherosProveedorServiceImpl}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Transactional
@org.springframework.stereotype.Service
public class FicherosProveedorServiceImpl implements GenericService<FicherosProveedorDTO> {

    private final Logger log = LoggerFactory.getLogger(FicherosProveedorServiceImpl.class);
    private final FicherosProveedorRepository entityRepository;
    private final FicherosProveedorMapping entityMapping = Mappers.getMapper(FicherosProveedorMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public FicherosProveedorServiceImpl(FicherosProveedorRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<FicherosProveedorDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo FicherosProveedor");
        return entityMapping.getDto(entityRepository.findAll());
    }

    /**
     * Obtiene todas los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public Page<FicherosProveedorDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo FicherosProveedor con paginacion");
        return entityRepository.findAll(pageable).map(entityMapping::getDto);
    }

    /**
     * Guarda o actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public FicherosProveedorDTO saveUpdate(FicherosProveedorDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo FicherosProveedor: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        FicherosProveedor entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        FicherosProveedorDTO actualEntity = entityMapping.getDto(entity);
        return actualEntity;
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public FicherosProveedorDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo FicherosProveedor: {}", id);
        FicherosProveedor searchedEntity = entityRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new EntityNotFoundException(id));
        return entityMapping.getDto(searchedEntity);
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public void deleteEntity(String id) throws Exception {
        log.debug("Solicitud para eliminar la entidad tipo FicherosProveedor: {}", id);
        entityRepository.deleteById(String.valueOf(id));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<FicherosProveedorDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo FicherosProveedor: {}", query);
        return entityMapping.getDto(entityRepository.searchEntities(query));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y paginación suministradas.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @Transactional(readOnly = true)
    @Override
    public Page<FicherosProveedorDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo FicherosProveedor para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
