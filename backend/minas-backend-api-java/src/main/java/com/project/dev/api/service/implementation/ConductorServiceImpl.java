/*
 * @fileoverview    {ConductorServiceImpl}
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

import com.project.dev.api.domain.Conductor;
import com.project.dev.api.dto.ConductorDTO;
import com.project.dev.api.repository.ConductorRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.ConductorMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code ConductorServiceImpl}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Transactional
@org.springframework.stereotype.Service
public class ConductorServiceImpl implements GenericService<ConductorDTO> {

    private final Logger log = LoggerFactory.getLogger(ConductorServiceImpl.class);
    private final ConductorRepository entityRepository;
    private final ConductorMapping entityMapping = Mappers.getMapper(ConductorMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public ConductorServiceImpl(ConductorRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<ConductorDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo Conductor");
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
    public Page<ConductorDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo Conductor con paginacion");
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
    public ConductorDTO saveUpdate(ConductorDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo Conductor: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        Conductor entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        ConductorDTO actualEntity = entityMapping.getDto(entity);
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
    public ConductorDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo Conductor: {}", id);
        Conductor searchedEntity = entityRepository.findById(String.valueOf(id))
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
        log.debug("Solicitud para eliminar la entidad tipo Conductor: {}", id);
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
    public List<ConductorDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo Conductor: {}", query);
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
    public Page<ConductorDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo Conductor para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
