/*
 * @fileoverview    {RegistroEntradaSalidaServiceImpl}
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

import com.project.dev.api.domain.RegistroEntradaSalida;
import com.project.dev.api.dto.RegistroEntradaSalidaDTO;
import com.project.dev.api.repository.RegistroEntradaSalidaRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.RegistroEntradaSalidaMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code RegistroEntradaSalidaServiceImpl}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Transactional
@org.springframework.stereotype.Service
public class RegistroEntradaSalidaServiceImpl implements GenericService<RegistroEntradaSalidaDTO> {

    private final Logger log = LoggerFactory.getLogger(RegistroEntradaSalidaServiceImpl.class);
    private final RegistroEntradaSalidaRepository entityRepository;
    private final RegistroEntradaSalidaMapping entityMapping = Mappers.getMapper(RegistroEntradaSalidaMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public RegistroEntradaSalidaServiceImpl(RegistroEntradaSalidaRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<RegistroEntradaSalidaDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo RegistroEntradaSalida");
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
    public Page<RegistroEntradaSalidaDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo RegistroEntradaSalida con paginacion");
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
    public RegistroEntradaSalidaDTO saveUpdate(RegistroEntradaSalidaDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo RegistroEntradaSalida: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        RegistroEntradaSalida entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        RegistroEntradaSalidaDTO actualEntity = entityMapping.getDto(entity);
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
    public RegistroEntradaSalidaDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo RegistroEntradaSalida: {}", id);
        RegistroEntradaSalida searchedEntity = entityRepository.findById(Integer.parseInt(id))
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
        log.debug("Solicitud para eliminar la entidad tipo RegistroEntradaSalida: {}", id);
        entityRepository.deleteById(Integer.parseInt(id));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<RegistroEntradaSalidaDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo RegistroEntradaSalida: {}", query);
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
    public Page<RegistroEntradaSalidaDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo RegistroEntradaSalida para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
